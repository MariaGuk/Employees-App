import axios from 'axios';
import { useMutation } from "react-query";
import { client } from "App"

const editEmployee = async ({ ...data }) => {
  const response = await axios.put(`https://api-for-masha.herokuapp.com/api/employees/${data.activeEmployeeId}`, data);

  return response.data;
};

const useEditEmployee = () => {
  client.invalidateQueries('employees');
  return useMutation(editEmployee);
};

export { useEditEmployee };