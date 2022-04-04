import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useGetEmployees, useGetEmployee } from "api/getEmployees";
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

  console.log(activeEmployeeId, 'activeID');

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
  const { mutateAsync: deleteEmployeeMutation, isLoading: isEmployeeDeleting, isError: isEmployeeDeletingError } = useDeleteEmployee();

  const handleDeleteEmployee = async (id) => {
    await deleteEmployeeMutation(id);
    client.invalidateQueries('employees');
  };

  //ADDING
  const { mutateAsync: addEmployeeMutation, isLoading: isEmployeeAdding, } = useAddNewEmployee();

  const onAddFormSubmit = async (formData) => {
    await addEmployeeMutation({ ...formData, });
    setIsOpen(false);
    client.invalidateQueries('employees');
  };

  // EDITING
  // const { isLoading: isEmployeeGetting, } = useGetEmployee(activeEmployeeId);

  const { mutateAsync: editEmployeeMutation, isLoading: isEmployeeEditing } = useEditEmployee();

  const onEditFormSubmit = async (data) => {
    await editEmployeeMutation({ ...data, activeEmployeeId });
    setIsOpen(false);
    client.invalidateQueries('employees');
  };

  if (isEmployeesGetting) {
    return <LinearProgress />
  }
  if (isError) { return <h2>{error.message}</h2> }

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
      activeEmployeeId={activeEmployeeId}
    />
  );
};

export default EmployeesContainer;
