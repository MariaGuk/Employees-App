import React from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import Loader from "react-loader-spinner";

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
  handleCancel,
  defaultValues,
  onFormSubmit,
  isLoading
}) => {
  const formik = useFormik({
    initialValues: { defaultValues },
    onSubmit: data => {
      onFormSubmit(data);
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
          <form onSubmit={formik.handleSubmit}>
            <TextFieldsContainer>
              <TextField
                type="text"
                label="First Name"
                name="firstName"
                variant="outlined"
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                onBlur={formik.handleBlur}
                onKeyPress={(event) => noDigits(event)}
              />
              <TextField
                type="text"
                label="Last Name"
                name="lastName"
                variant="outlined"
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                onBlur={formik.handleBlur}
                onKeyPress={(event) => noDigits(event)}
              />
              <TextField
                type="email"
                label="Email"
                name="email"
                variant="outlined"
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
              />
              <TextField
                type="number"
                label="Age"
                name="age"
                variant="outlined"
                onChange={formik.handleChange}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
                onBlur={formik.handleBlur}
              />
              <ButtonsContainer>
                <StyledButton type="submit" > {isLoading ? <Loader type="ThreeDots" color="#1976D2" height={10} /> : "Submit"}</StyledButton>
                <StyledButton type="button" onClick={handleCancel}>
                  Cancel
                </StyledButton>
              </ButtonsContainer>
            </TextFieldsContainer>
          </form>
        </Container>
      </StyledBox>
    </Modal>
  );
};

export default ModalWindow;
