import axios from 'axios';
import { useMutation } from "react-query";

const addNewEmployee = async ({ ...employee }) => {
  const { data } = await axios.post('https://api-for-masha.herokuapp.com/api/employees', employee );
  
  return data;
};

const useAddNewEmployee = () => {
  return useMutation(addNewEmployee)
};

export { useAddNewEmployee } 