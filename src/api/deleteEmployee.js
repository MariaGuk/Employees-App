import axios from 'axios';
import { useMutation } from "react-query";
import { client } from 'App';


const deleteEmployee = async (employeeId) => {
  await axios.delete(`https://api-for-masha.herokuapp.com/api/employees/${employeeId}`);

  return true;
};

const useDeleteEmployee = () => {
  return useMutation(deleteEmployee, {
    onSuccess: () => {
      client.invalidateQueries('employees');
    }
  });
};

export { useDeleteEmployee }