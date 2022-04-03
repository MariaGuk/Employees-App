import React from "react";
import Button from "@mui/material/Button";

import {
  Box,
  Header,
  Container,
  ButtonContainer,
} from "./styled";

import { client } from '../../App';

import EmployeeCard from "./EmployeeCard";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

const Employees = ({ data, isOpen, setIsOpen, handleCancel, isLoading, handleOpen, isEmployeeDeleting, addEmployeeMutation, editEmployeeMutation, deleteEmployeeMutation, isEmployeeAdding }) => {

  const onAddFormSubmit = async (formData) => {
    await addEmployeeMutation({ ...formData });
    setIsOpen(false);
    client.invalidateQueries('employees');
  };

  const defaultValues = [{ firstName: '', lastName: '', email: '', age: '' }];

  return (
    <Box>
      <Header>Employees contacts</Header>
      <ModalWindow
        isOpen={isOpen}
        handleCancel={handleCancel}
        onAddFormSubmit={onAddFormSubmit}
        defaultValues={defaultValues}
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
            editEmployeeMutation={editEmployeeMutation}
            deleteEmployeeMutation={deleteEmployeeMutation}
            isEmployeeAdding={isEmployeeAdding}
            onAddFormSubmit={onAddFormSubmit}
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
