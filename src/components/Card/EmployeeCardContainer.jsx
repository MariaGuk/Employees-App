import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { formValidation } from 'validation/validation';
import { useEditEmployee } from 'api/editEmployee';
import { useDeleteEmployee } from 'api/deleteEmployee'

import EmployeeCard from './EmployeeCard';

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
};

const EmployeeCardContainer = ({ firstName, lastName, email, age, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { mutate: editEmployeeMutation } = useEditEmployee();

  const { mutate: deleteEmployeeMutation } = useDeleteEmployee();

  const handleDeleteEmployee = () => {
    deleteEmployeeMutation(id);
  };

  const formik = useFormik({
    initialValues: defaultValues,
    onSubmit: (employeeFormData, onSubmitProps) => {
      editEmployeeMutation({ ...employeeFormData, activeEmployeeId: id });
      onSubmitProps.resetForm();
      setIsOpen(false)
    },
    validationSchema: formValidation
  });

  useEffect(() => {
    formik.setValues({ firstName: firstName, lastName: lastName, email: email, age: age });
  }, [firstName, lastName, email, age]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    formik.setValues({ firstName: firstName, lastName: lastName, email: email, age: age });
    setIsOpen(false);
  };

  return (
    <EmployeeCard
      id={id}
      firstName={firstName}
      lastName={lastName}
      email={email}
      age={age}
      values={formik.values}
      isOpen={isOpen}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
      handleDeleteEmployee={handleDeleteEmployee}
      handleOpen={handleOpen}
      handleCancel={handleCancel}
    />
  );
};

export default EmployeeCardContainer;