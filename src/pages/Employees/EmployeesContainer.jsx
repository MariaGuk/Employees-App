import React, { useState } from "react";
import { useFormik } from 'formik';
import LinearProgress from "@material-ui/core/LinearProgress";

import { useGetEmployees } from "api/getEmployees";
import { useAddNewEmployee } from 'api/addNewEmployee';
import { formValidation } from 'validation/validation';

import Employees from "./Employees";

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
};

const EmployeesContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: employeesProfiles, isLoading: isEmployeesLoading } = useGetEmployees();

  const { mutateAsync: addEmployeeMutation } = useAddNewEmployee();

  const formik = useFormik({
    initialValues: defaultValues,
    onSubmit: (employeeFormData, onSubmitProps) => {
      addEmployeeMutation({ ...employeeFormData });
      onSubmitProps.resetForm();
      setIsOpen(false);
    },
    validationSchema: formValidation,
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    formik.setValues({ defaultValues });
    setIsOpen(false);
  };

  return (
    <>
      {isEmployeesLoading ?
        < LinearProgress /> :
        <Employees
          employeesProfiles={employeesProfiles}
          values={formik.values}
          handleChange={formik.handleChange}
          handleSubmit={formik.handleSubmit}
          isOpen={isOpen}
          handleOpen={handleOpen}
          handleCancel={handleCancel}
        />

      }
    </>
  );
};

export default EmployeesContainer;