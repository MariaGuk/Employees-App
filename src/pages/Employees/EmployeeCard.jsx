import React from 'react'
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button"; import Loader from "react-loader-spinner";
import LinearProgress from "@material-ui/core/LinearProgress";

import { client } from '../../App';
import {
  StyledCard,
  CardActions,
  CardContent,
} from "./styled";

import ModalWindow from "../../components/ModalWindow/ModalWindow";

const EmployeeCard = ({ data, id, firstName, lastName, email, age, handleOpen, isOpen, handleCancel, isEmployeeDeleting, editEmployeeMutation, deleteEmployeeMutation, setIsOpen, isEmployeeAdding, onAddFormSubmit }) => {

  const handleDeleteEmployee = async () => {
    await deleteEmployeeMutation(id);
    client.invalidateQueries('employees');
  };

  const onEditFormSubmit = async (data, event) => {
    event.preventDefault();
    await editEmployeeMutation({ ...data, id });
    setIsOpen(false);
    client.invalidateQueries('employees');
  };

  if (isEmployeeAdding) {
    return (
      <LinearProgress />
    );
  };

  return (
    <>
      <StyledCard key={id}>
        <ModalWindow
          isOpen={isOpen}
          defaultValues={data}
          onAddFormSubmit={onAddFormSubmit}
          onEditFormSubmit={onEditFormSubmit}
          handleCancel={handleCancel}
        />
        <CardActions>
          <Button >
            <EditIcon onClick={() => handleOpen(data.id)} />
          </Button>
          <Button onClick={handleDeleteEmployee}  > {isEmployeeDeleting ? <Loader type="ThreeDots" color="#1976D2" height={4} /> : <DeleteIcon />}
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
  )
};

export default EmployeeCard;