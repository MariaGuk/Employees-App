import React from "react";
import Button from "@mui/material/Button";

import ModalWindow from "components/ModalWindow";
import EmployeeCard from "components/Card/EmployeeCard";

import {
  Box,
  Header,
  Container,
  ButtonContainer,
} from "./styled";

const Employees = (props) => (
  <Box>
    <Header>Employees contacts</Header>
    <ModalWindow
      isOpen={props.isOpen}
      handleCancel={props.handleCancel}
      onAddFormSubmit={props.onAddFormSubmit}
      isEmployeeAdding={props.isEmployeeAdding}
    />
    <Container>
      {props.employeesProfiles.map(({ _id, firstName, lastName, email, age }) => (
        <EmployeeCard
          employeesProfiles={props.employeesProfiles}
          key={_id}
          id={_id}
          firstName={firstName}
          lastName={lastName}
          email={email}
          age={age}
          isOpen={props.isOpen}
          handleOpen={props.handleOpen}
          handleCancel={props.handleCancel}
          isEmployeeDeleting={props.isEmployeeDeleting}
          onAddFormSubmit={props.onAddFormSubmit}
          onEditFormSubmit={props.onEditFormSubmit}
          handleDeleteEmployee={props.handleDeleteEmployee}
          isEmployeeEditing={props.isEmployeeEditing}
          currentEmployee={props.currentEmployee}
        />
      ))}
    </Container>
    <ButtonContainer>
      <Button onClick={props.handleOpen} >
        + Add new employee
      </Button>
    </ButtonContainer>
  </Box>
);

export default Employees;
