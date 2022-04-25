import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useGetEmployees } from "api/getEmployees";
import { useAddNewEmployee } from 'api/addNewEmployee';
import { useDeleteEmployee } from 'api/deleteEmployee';
import { useEditEmployee } from 'api/editEmployee';

import Employees from "./Employees";

const EmployeesContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeEmployeeId, setActiveEmployeeId] = useState(null);

  const { data: employeesProfiles, isLoading: isEmployeesGetting, } = useGetEmployees();

  const getActiveEmployee = () => employeesProfiles?.find(({ id }) => id === activeEmployeeId);

  const currentEmployee = employeesProfiles?.find(employee => employee._id === activeEmployeeId);

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
  const { mutateAsync: deleteEmployeeMutation, isLoading: isEmployeeDeleting, } = useDeleteEmployee();

  const handleDeleteEmployee = async (id) => {
    await deleteEmployeeMutation(id);
  };

  //ADDING
  const { mutateAsync: addEmployeeMutation, isLoading: isEmployeeAdding, isError: isAddingError, error: errorAdd } = useAddNewEmployee();

  const onAddFormSubmit = async (formData) => {
    await addEmployeeMutation({ ...formData });
    setIsOpen(false);
  };

  // EDITING
  const { mutateAsync: editEmployeeMutation, isLoading: isEmployeeEditing, isError: isEditingError, error: errorEdit } = useEditEmployee();

  const onEditFormSubmit = async (employeeFormData) => {
    await editEmployeeMutation({ ...employeeFormData, activeEmployeeId });
    setIsOpen(false);
  };

  return (
    <>
      {isEmployeesGetting ?
        <LinearProgress /> :
        isEditingError || isAddingError ?
          <h2>{errorEdit.message}</h2> || <h2>{errorAdd.message}</h2> :
          <Employees
            employeesProfiles={employeesProfiles}
            isOpen={isOpen}
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
      }
    </>
  );
};

export default EmployeesContainer;
