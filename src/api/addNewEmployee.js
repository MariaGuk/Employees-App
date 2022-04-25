import axios from 'axios';
import { useMutation } from "react-query";
import { client } from 'App';

const addNewEmployee = async ({ ...employee }) => {
  const { data } = await axios.post('https://api-for-masha.herokuapp.com/api/employees', employee);

  return data;
};

const useAddNewEmployee = () => {
  return useMutation(addNewEmployee, {
    onSuccess: () => {
      client.invalidateQueries('employees');
    }
  })
};

export { useAddNewEmployee } 