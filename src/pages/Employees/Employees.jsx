import React from "react";
import Button from "@mui/material/Button";

import {
  Box,
  Header,
  Container,
  ButtonContainer,
} from "./styled";

import ModalWindow from "components/ModalWindow";
import EmployeeCardContainer from "components/Card/EmployeeCardContainer";

const Employees = ({
  employeesProfiles,
  values,
  handleChange,
  handleSubmit,
  isOpen,
  handleOpen,
  handleCancel,
}) => (
  <Box>
    <Header>Employees contacts</Header>
    <ModalWindow
      defaultValues={values}
      isOpen={isOpen}
      handleCancel={handleCancel}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
    <Container>
      {employeesProfiles.map(({ _id, firstName, lastName, email, age }) => (
        <EmployeeCardContainer
          key={_id}
          id={_id}
          firstName={firstName}
          lastName={lastName}
          email={email}
          age={age}
        />
      ))}
    </Container>
    <ButtonContainer>
      <Button onClick={handleOpen} >
        + Add new employee
      </Button>
    </ButtonContainer>
  </Box>);

export default Employees;
