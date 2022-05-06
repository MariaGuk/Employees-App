import React from 'react'
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import {
  StyledCard,
  CardActions,
  CardContent,
} from "pages/Employees/styled";

import ModalWindow from "components/ModalWindow";

const EmployeeCard = ({
  id,
  firstName,
  lastName,
  email,
  age,
  values,
  isOpen,
  handleChange,
  handleSubmit,
  handleDeleteEmployee,
  handleOpen,
  handleCancel
}) => (
  <StyledCard>
    <ModalWindow
      isOpen={isOpen}
      defaultValues={values}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleCancel={handleCancel}
    />
    <CardActions>
      <Button >
        <EditIcon onClick={handleOpen} />
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
);

export default EmployeeCard;