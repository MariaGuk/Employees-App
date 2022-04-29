import React, { useState } from 'react';
import Button from '@mui/material/Button';

import { Box, Header, Container, ButtonContainer } from './styled';
import EmployeeCardContainer from '../../components/Card/EmployeeCardContainer';
import ModalWindow from '../../components/ModalWindow';

const Employees = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalWindow
        values={props.values}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
      <Box>
        <Header>Employees contacts</Header>
        <Container>
          {props.employeesProfiles.map(({ _id, firstName, lastName, email, age }) => (
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
          <Button onClick={() => setIsOpen(true)}>+ Add new employee</Button>
        </ButtonContainer>
      </Box>
    </>
  );
};

export default Employees;
