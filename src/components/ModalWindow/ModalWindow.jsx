import React from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import {
  StyledButton,
  StyledBox,
  Container,
  ButtonsContainer,
  TextFieldsContainer,
} from './styled';

const ModalWindow = ({ values, handleChange, isOpen, handleClose, handleSubmit }) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <h2>Employee</h2>
        <Container>
          <form onSubmit={handleSubmit}>
            <TextFieldsContainer>
              <TextField
                type="text"
                label="First Name"
                name="firstName"
                id="firstName"
                variant="outlined"
                defaultValue=""
                value={values.firstName}
                onChange={handleChange}
              />

              <TextField
                type="text"
                label="Last Name"
                name="lastName"
                id="lastName"
                variant="outlined"
                defaultValue=""
                value={values.lastName}
                onChange={handleChange}
              />
              <TextField
                type="email"
                label="Email"
                name="email"
                id="email"
                variant="outlined"
                defaultValue=""
                value={values.email}
                onChange={handleChange}
              />
              <TextField
                type="number"
                label="Age"
                name="age"
                id="age"
                variant="outlined"
                defaultValue={0}
                value={values.age}
                onChange={handleChange}
              />
              <ButtonsContainer>
                <StyledButton type="submit">Save</StyledButton>
                <StyledButton type="button" onClick={handleClose}>
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
