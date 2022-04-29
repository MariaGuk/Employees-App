import React, { useEffect } from 'react';
import { useFormik } from 'formik';

import { formValidation } from '../../validation/validation';
import { useEditEmployee } from '../../api/editEmployee';
import EmployeeCard from './EmployeeCard';

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
};

const EmployeeCardContainer = ({ firstName, lastName, email, age, id }) => {
  const { mutate: editEmployeeMutation } = useEditEmployee();

  const formik = useFormik({
    initialValues: defaultValues,
    onSubmit: (employeeFormData, onSubmitProps) => {
      editEmployeeMutation({ ...employeeFormData, activeEmployeeId: id });
      onSubmitProps.resetForm();
    },
    validationSchema: formValidation,
  });

  useEffect(() => {
    formik.setValues({ firstName: firstName, lastName: lastName, email: email, age: age });
  }, [firstName, lastName, email, age]);

  return (
    <EmployeeCard
      values={formik.values}
      firstName={firstName}
      lastName={lastName}
      email={email}
      age={age}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
    />
  );
};

export default EmployeeCardContainer;
