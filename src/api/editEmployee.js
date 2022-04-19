import axios from 'axios';
import { useMutation } from "react-query";

const editEmployee = async ({ ...data }) => {
  const response = await axios.put(`https://api-for-masha.herokuapp.com/api/employees/${data.activeEmployeeId}`, data);

  return response.data;
};

const useEditEmployee = () => {
  return useMutation(editEmployee);
};

export { useEditEmployee };