import React from 'react'
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Loader from "react-loader-spinner";

import ModalWindow from "components/ModalWindow";

import {
  StyledCard,
  CardActions,
  CardContent,
} from "pages/Employees/styled";

const EmployeeCard = (props) => (
  <StyledCard>
    <ModalWindow
      isOpen={props.isOpen}
      defaultValues={props.currentEmployee}
      onAddFormSubmit={props.onAddFormSubmit}
      onEditFormSubmit={props.onEditFormSubmit}
      handleCancel={props.handleCancel}
      isLoading={props.isEmployeeEditing}
    />
    <CardActions>
      <Button >
        <EditIcon onClick={() => props.handleOpen(props.id)} />
      </Button>
      <Button onClick={() => props.handleDeleteEmployee(props.id)}  > {props.isEmployeeDeleting ? <Loader type="ThreeDots" color="#1976D2" height={4} /> : <DeleteIcon />}
      </Button>
    </CardActions>
    <CardContent>
      <Typography>First Name: {props.firstName}</Typography>
      <Typography>Last Name: {props.lastName}</Typography>
      <Typography>Email: {props.email}</Typography>
      <Typography>Age: {props.age}</Typography>
    </CardContent>
  </StyledCard>
);

export default EmployeeCard;