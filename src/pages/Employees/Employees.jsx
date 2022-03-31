import React, { useState } from "react";
import { useMutation } from 'react-query';
import Button from "@mui/material/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

import { addNewEmployee } from '../../api/addNewEmployee'
import {
  Box,
  Header,
  Container,
  ButtonContainer,
} from "./styled";

import ModalWindow from '../../components/ModalWindow/ModalWindow';
import EmployeeCard from "./EmployeeCard";

const Employees = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false)
  };
  //ADDING
  const { mutateAsync, isLoading, } = useMutation(addNewEmployee);

  const onFormSubmit = async (formData) => {
    await mutateAsync({ ...formData });
    setIsOpen(false)
  };


  if (isLoading)
    return (
      <>
        <LinearProgress />
        <h2>Please wait...</h2>
      </>
    );


  return (
    <Box>
      <Header>Employees contacts</Header>
      <ModalWindow
        isOpen={isOpen}
        onFormSubmit={onFormSubmit}
        isLoading={isLoading}
        handleCancel={handleCancel}
      />
      <Container>
        {data.map(({ _id, firstName, lastName, email, age }) => (
          <EmployeeCard
            key={_id}
            id={_id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            age={age}
            handleOpen={handleOpen}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleCancel={handleCancel}
          />
        ))}
      </Container>
      <ButtonContainer>
        <Button onClick={handleOpen} isOpen={isOpen}
        >+ Add new employee</Button>
      </ButtonContainer>
    </Box>
  );
};

export default Employees;
