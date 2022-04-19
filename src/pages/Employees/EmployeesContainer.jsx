import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useGetEmployees } from "api/getEmployees";
import { useAddNewEmployee } from 'api/addNewEmployee';
import { useDeleteEmployee } from 'api/deleteEmployee';
import { useEditEmployee } from 'api/editEmployee';
import { client } from 'App';

import Employees from "./Employees";

const EmployeesContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeEmployeeId, setActiveEmployeeId] = useState(null);

  const { data, isLoading: isEmployeesGetting, isError, error } = useGetEmployees();

  const getActiveEmployee = () => data?.find(({ id }) => id === activeEmployeeId);

  const currentEmployee = data?.find(employee => employee._id === activeEmployeeId);

  const handleOpen = (employeeId) => {
    getActiveEmployee();
    setIsOpen(true);
    setActiveEmployeeId(employeeId);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setActiveEmployeeId(null);
  }

  //DELETING 
  const { mutateAsync: deleteEmployeeMutation, isLoading: isEmployeeDeleting, isError: isDeletingError, error: errorDelete } = useDeleteEmployee();

  const handleDeleteEmployee = async (id) => {
    await deleteEmployeeMutation(id);
    client.invalidateQueries('employees');
  };

  //ADDING
  const { mutateAsync: addEmployeeMutation, isLoading: isEmployeeAdding, isError: isAddingError, error: errorAdd } = useAddNewEmployee();

  const onAddFormSubmit = async (formData) => {
    await addEmployeeMutation({ ...formData });
    setIsOpen(false);
    client.invalidateQueries('employees');
  };

  // EDITING
  const { mutateAsync: editEmployeeMutation, isLoading: isEmployeeEditing, isError: isEditingError, error: errorEdit } = useEditEmployee();

  const onEditFormSubmit = async (data) => {
    await editEmployeeMutation({ ...data, activeEmployeeId });
    setIsOpen(false);
    client.invalidateQueries('employees');
  };

  if (isEmployeesGetting) {
    return <LinearProgress />
  };

  if (isError || isDeletingError || isEditingError || isAddingError) {
    return <h2>{error.message}||{errorDelete.message}||{errorEdit.message}||{errorAdd.message}</h2>
  };

  return (
    <Employees
      data={data}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleOpen={handleOpen}
      handleCancel={handleCancel}
      isEmployeeAdding={isEmployeeAdding}
      isEmployeeEditing={isEmployeeEditing}
      isEmployeeDeleting={isEmployeeDeleting}
      onAddFormSubmit={onAddFormSubmit}
      onEditFormSubmit={onEditFormSubmit}
      handleDeleteEmployee={handleDeleteEmployee}
      currentEmployee={currentEmployee}
    />
  );
};

export default EmployeesContainer;
