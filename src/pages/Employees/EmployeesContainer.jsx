import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import LinearProgress from "@material-ui/core/LinearProgress";

import { getEmployees, getEmployee } from "../../api/getEmployees";
import { addNewEmployee } from '../../api/addNewEmployee';
import { deleteEmployee } from '../../api/deleteEmployee';
import { editEmployee } from '../../api/editEmployee';

import Employees from "./Employees";

const EmployeesContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading: isEmployeesGetting, isError, error } = useQuery("employees", getEmployees);

  const handleOpen = () => setIsOpen(true);

  const handleCancel = () => setIsOpen(false);

  //DELETING 
  const { mutateAsync: deleteEmployeeMutation, isLoading: isEmployeeDeleting } = useMutation(deleteEmployee,);

  //ADDING
  const { mutateAsync: addEmployeeMutation, isLoading: isEmployeeAdding, } = useMutation(addNewEmployee);

  // EDITING
  // const { isLoading: isEmployeeGetting, } = useQuery(['employee', { activeEmployeeId }], getEmployee(activeEmployeeId));

  const { mutateAsync: editEmployeeMutation, isLoading: isEmployeeEditing, } = useMutation(editEmployee);

  if (isEmployeesGetting)
    return <LinearProgress />

  if (isError) return <h2>{error.message}</h2>;

  return (
    <Employees
      data={data}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleOpen={handleOpen}
      handleCancel={handleCancel}
      addEmployeeMutation={addEmployeeMutation}
      editEmployeeMutation={editEmployeeMutation}
      deleteEmployeeMutation={deleteEmployeeMutation}
      isEmployeeAdding={isEmployeeAdding}
      isEmployeeEditing={isEmployeeEditing}
      isEmployeeDeleting={isEmployeeDeleting}
    />
  );
};

export default EmployeesContainer;
