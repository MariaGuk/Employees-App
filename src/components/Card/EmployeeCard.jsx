import React from 'react'
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button"; import Loader from "react-loader-spinner";

import ModalWindow from "components/ModalWindow/ModalWindow";

import {
  StyledCard,
  CardActions,
  CardContent,
} from "../../pages/Employees/styled";

const EmployeeCard = ({ id, firstName, lastName, email, age, handleOpen, isOpen, handleCancel, isEmployeeDeleting, onAddFormSubmit, onEditFormSubmit, handleDeleteEmployee, isEmployeeEditing, currentEmployee }) => {

  return (
    <StyledCard>
      <ModalWindow
        isOpen={isOpen}
        defaultValues={currentEmployee}
        onAddFormSubmit={onAddFormSubmit}
        onEditFormSubmit={onEditFormSubmit}
        handleCancel={handleCancel}
        isLoading={isEmployeeEditing}
        />
      <CardActions>
        <Button >
          <EditIcon onClick={() => handleOpen(id)} />
        </Button>
        <Button onClick={() => handleDeleteEmployee(id)}  > {isEmployeeDeleting ? <Loader type="ThreeDots" color="#1976D2" height={4} /> : <DeleteIcon />}
        </Button>
      </CardActions>
      <CardContent>
        <Typography>First Name: {firstName}</Typography>
        <Typography>Last Name: {lastName}</Typography>
        <Typography>Email: {email}</Typography>
        <Typography>Age: {age}</Typography>
      </CardContent>
    </StyledCard>
  )
};

export default EmployeeCard;