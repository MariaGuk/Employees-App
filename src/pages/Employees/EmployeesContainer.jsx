import React, { useState } from "react";
import { useFormik } from 'formik';
import LinearProgress from "@material-ui/core/LinearProgress";

import { useGetEmployees } from "api/getEmployees";
import { useAddNewEmployee } from 'api/addNewEmployee';
import { formValidation } from '../../validation/validation';
import Employees from "./Employees";

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
};

const EmployeesContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: employeesProfiles } = useGetEmployees();

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

  const handleCancel = () => {
    formik.setValues({ defaultValues });
    setIsOpen(false);
  };

  return (
    <>
      {employeesProfiles ?
        <Employees
          employeesProfiles={employeesProfiles}
          values={formik.values}
          handleChange={formik.handleChange}
          handleSubmit={formik.handleSubmit}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleCancel={handleCancel}
        />
        : < LinearProgress />
      }
    </>
  );
};

export default EmployeesContainer;