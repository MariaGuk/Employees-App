import React from "react";
import Button from "@mui/material/Button";

import ModalWindow from "components/ModalWindow/ModalWindow";
import EmployeeCard from "components/Card/EmployeeCard";

import {
  Box,
  Header,
  Container,
  ButtonContainer,
} from "./styled";

const Employees = ({ data, isOpen, setIsOpen, handleCancel, handleOpen, isEmployeeDeleting, isEmployeeAdding, isEmployeeEditing, onAddFormSubmit, onEditFormSubmit, handleDeleteEmployee, currentEmployee, activeEmployeeId }) => {

  return (
    <Box>
      <Header>Employees contacts</Header>
      <ModalWindow
        isOpen={isOpen}
        handleCancel={handleCancel}
        onAddFormSubmit={onAddFormSubmit}
        isEmployeeAdding={isEmployeeAdding}
      />
      <Container>
        {data.map(({ _id, firstName, lastName, email, age }) => (
          <EmployeeCard
            data={data}
            key={_id}
            id={_id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            age={age}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleOpen={handleOpen}
            handleCancel={handleCancel}
            isEmployeeDeleting={isEmployeeDeleting}
            onAddFormSubmit={onAddFormSubmit}
            onEditFormSubmit={onEditFormSubmit}
            handleDeleteEmployee={handleDeleteEmployee}
            isEmployeeEditing={isEmployeeEditing}
            currentEmployee={currentEmployee}
            activeEmployeeId={activeEmployeeId}
          />
        ))}
      </Container>
      <ButtonContainer>
        <Button onClick={handleOpen}
        >+ Add new employee</Button>
      </ButtonContainer>
    </Box>
  );
};

export default Employees;
