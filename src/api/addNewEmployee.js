import axios from 'axios';
import { useMutation } from "react-query";
import { client } from 'App';

const addNewEmployee = async ({ ...employee }) => {
  const { data } = await axios.post('https://api-for-masha.herokuapp.com/api/employees', employee);

  return data;
};

const useAddNewEmployee = () => {
  client.invalidateQueries('employees');
  return useMutation(addNewEmployee)
};

export { useAddNewEmployee } 