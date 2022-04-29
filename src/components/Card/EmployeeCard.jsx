import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

import { StyledCard, CardActions, CardContent } from 'pages/Employees/styled';
import ModalWindow from '../ModalWindow';

const EmployeeCard = ({
  values,
  firstName,
  lastName,
  email,
  age,
  handleChange,
  handleSubmit,
  handleDeleteEmployee,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalWindow
        values={values}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
      <StyledCard>
        <CardActions>
          <Button>
            <EditIcon onClick={() => setIsOpen(true)} />
          </Button>
          <Button onClick={() => handleDeleteEmployee(id)}>
            <DeleteIcon />
          </Button>
        </CardActions>

        <CardContent>
          <Typography>First Name: {firstName}</Typography>
          <Typography>Last Name: {lastName}</Typography>
          <Typography>Email: {email}</Typography>
          <Typography>Age: {age}</Typography>
        </CardContent>
      </StyledCard>
    </>
  );
};

export default EmployeeCard;
