import React from "react";
import Modal from "@mui/material/Modal";
import Loader from "react-loader-spinner";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";

import { noDigits } from "utils/noDigits";
import { formValidation } from "validation/validation";

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
  onEditFormSubmit,
}) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: defaultValues || {},
    onSubmit: (data, onSubmitProps,) => {
      if (defaultValues) {
        onEditFormSubmit(data);
      }
      else {
        onAddFormSubmit(data)
      }
      onSubmitProps.resetForm();
    },
    validationSchema: formValidation,
  });

  return (
    <Modal
      open={isOpen}
      onClose={handleCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
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
                defaultValue={defaultValues?.firstName}
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
                defaultValue={defaultValues?.lastName}
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
                defaultValue={defaultValues?.email}
                {...formik.getFieldProps('email')}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                type="number"
                label="Age"
                name="age"
                variant="outlined"
                defaultValue={defaultValues?.age}
                {...formik.getFieldProps('age')}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
              />
              <ButtonsContainer>
                <StyledButton type="submit" disabled={!(formik.dirty && formik.isValid)}  >
                  {isLoading ? <Loader type="ThreeDots" color="#1976D2" height={2} /> : "Save"}
                </StyledButton>
                <StyledButton type="button" onClick={handleCancel}>
                  Cancel
                </StyledButton>
              </ButtonsContainer>
            </TextFieldsContainer>
          </form>
        </Container>
      </StyledBox>
    </Modal >
  );
};

export default ModalWindow;
