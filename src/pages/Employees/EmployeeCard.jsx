import React from 'react'
import { useMutation, useQueryClient, useQuery } from "react-query";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button"; import Loader from "react-loader-spinner"

import { deleteEmployee } from '../../api/deleteEmployee';
import { getEmployee } from '../../api/getEmployees';
import { editEmployee } from '../../api/editEmployee';
import {
  StyledCard,
  CardActions,
  CardContent,
} from "./styled";

import ModalWindow from "../../components/ModalWindow/ModalWindow";

const EmployeeCard = ({ id, firstName, lastName, email, age, handleOpen, setIsOpen, isOpen, handleCancel, }) => {
  //DELETING 
  const { mutateAsync, isLoading } = useMutation(deleteEmployee,);
  const queryClient = useQueryClient()

  const handleDeleteEmployee = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries('employees');
  };

  //EDITING

  // const { data, error, isLoading: isGetting, isError } = useQuery(['employee', { id }], getEmployee);

  // const { mutateAsync: asyncMutation, isLoading: isMutating } = useMutation(editEmployee);

  // const onFormSubmit = async (data) => {
  //   await asyncMutation({ ...data, id });
  //   setIsOpen(false)
  // };
  
  // if (isGetting) {
    // return (
    //   <>
    //     <LinearProgress />
    //     <h2>Please wait...</h2>
    //   </>
    // );


  // if (isError) {
  //   return (
  //     <p>Error:{error.message}</p>
  //   );
  // }

  return (
    <StyledCard key={id}>
      <ModalWindow
        isOpen={isOpen}
        // defaultValues={data}
        // onFormSubmit={onFormSubmit}
        // isLoading={isMutating}
        handleCancel={handleCancel}
      />
      <CardActions>
        <Button >
          <EditIcon onClick={handleOpen} />
        </Button>
        <Button onClick={handleDeleteEmployee}  >   {isLoading ? <Loader type="ThreeDots" color="#1976D2" height={4} /> : <DeleteIcon />}
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
}

export default EmployeeCard