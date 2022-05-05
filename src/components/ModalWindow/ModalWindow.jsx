import React from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import { noDigits } from "utils/noDigits";
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
  handleChange,
  handleSubmit,
}) => {
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
          <form onSubmit={handleSubmit} >
            <TextFieldsContainer >
              <TextField
                id='firstName'
                type="text"
                label="First Name"
                name="firstName"
                variant="outlined"
                defaultValue=''
                value={defaultValues?.firstName}
                onChange={handleChange}
                onKeyPress={(event) => noDigits(event)}
              />
              <TextField
                id='lastName'
                type="text"
                label="Last Name"
                name="lastName"
                variant="outlined"
                defaultValue=''
                value={defaultValues?.lastName}
                onChange={handleChange}
              />
              <TextField
                id='email'
                type="email"
                label="Email"
                name="email"
                variant="outlined"
                defaultValue=''
                value={defaultValues?.email}
                onChange={handleChange}
              />
              <TextField
                id='age'
                type="number"
                label="Age"
                name="age"
                variant="outlined"
                defaultValue=''
                value={defaultValues?.age}
                onChange={handleChange}
              />
              <ButtonsContainer>
                <StyledButton type="submit" >
                  Save
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
