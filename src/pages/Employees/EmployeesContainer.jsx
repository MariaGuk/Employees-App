import React from 'react';

import { useGetEmployees } from 'api/getEmployees';
import { useAddNewEmployee } from 'api/addNewEmployee';
import { useDeleteEmployee } from 'api/deleteEmployee';

import Employees from './Employees';
import { useFormik } from 'formik';
import { formValidation } from '../../validation/validation';

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
};

const EmployeesContainer = () => {
  const { data: employeesProfiles } = useGetEmployees();

  //DELETING
  const { mutateAsync: deleteEmployeeMutation } = useDeleteEmployee();

  const handleDeleteEmployee = async (id) => {
    await deleteEmployeeMutation(id);
  };

  //ADDING
  const { mutate: addEmployeeMutation } = useAddNewEmployee();

  const formik = useFormik({
    initialValues: defaultValues,
    onSubmit: (employeeFormData, onSubmitProps) => {
      addEmployeeMutation({ ...employeeFormData });
      onSubmitProps.resetForm();
    },
    validationSchema: formValidation,
  });

  return (
    <>
      {employeesProfiles && (
        <Employees
          values={formik.values}
          employeesProfiles={employeesProfiles}
          onAddFormSubmit={addEmployeeMutation}
          handleDeleteEmployee={handleDeleteEmployee}
          handleChange={formik.handleChange}
          handleSubmit={formik.handleSubmit}
        />
      )}
    </>
  );
};

export default EmployeesContainer;
