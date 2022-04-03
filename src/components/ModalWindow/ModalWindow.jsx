import React from "react";
import Modal from "@mui/material/Modal";
import Loader from "react-loader-spinner";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";

import { noDigits } from "../../utils/noDigits";
import { formValidation } from "../../validation/validation";

import {
  StyledButton,
  StyledBox,
  Container,
  ButtonsContainer,
  TextFieldsContainer,
} from "./styled";

const ModalWindow = ({
  isOpen,
  isLoading,
  handleCancel,
  defaultValues,
  onAddFormSubmit,
  onEditFormSubmit
}) => {
  const formik = useFormik({
    initialValues: { defaultValues },
    onSubmit: (data, onSubmitProps,) => {
      onAddFormSubmit(data);
      onSubmitProps.resetForm();
    },
    validationSchema: formValidation,
  });

  console.log(formik.values, 'default');

  return (
    <Modal
      open={isOpen}
      onClose={handleCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <StyledBox>
          <h2>Employee</h2>
          <Container>
            <form onSubmit={formik.handleSubmit} >
                <TextFieldsContainer >
                  <TextField
                    type="text"
                    label="First Name"
                    name="firstName"
                    variant="outlined"
                    {...formik.getFieldProps('firstName')}
                    error={
                      formik.touched.firstName && Boolean(formik.errors.firstName)
                    }
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    onKeyPress={(event) => noDigits(event)}
                  />
                  <TextField
                    type="text"
                    label="Last Name"
                    name="lastName"
                    variant="outlined"
                    {...formik.getFieldProps('lastName')}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    onKeyPress={(event) => noDigits(event)}
                  />
                  <TextField
                    type="email"
                    label="Email"
                    name="email"
                    variant="outlined"
                    {...formik.getFieldProps('email')}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    type="number"
                    label="Age"
                    name="age"
                    variant="outlined"
                    {...formik.getFieldProps('age')}
                    error={formik.touched.age && Boolean(formik.errors.age)}
                    helperText={formik.touched.age && formik.errors.age}
                  />
                  <ButtonsContainer>
                    <StyledButton type="submit" disabled={!(formik.dirty && formik.isValid)} >
                      {isLoading ? <Loader type="ThreeDots" color="#1976D2" height={10} /> : "Add"}
                    </StyledButton>
                    <StyledButton type="submit" disabled={!(formik.dirty && formik.isValid)} onClick={onEditFormSubmit}>
                      {isLoading ? <Loader type="ThreeDots" color="#1976D2" height={10} /> : "Edit"}</StyledButton>
                    <StyledButton type="button" onClick={handleCancel}>
                      Cancel
                    </StyledButton>
                  </ButtonsContainer>
                </TextFieldsContainer>
            </form>
          </Container>
        </StyledBox></>
    </Modal >
  );
};

export default ModalWindow;
