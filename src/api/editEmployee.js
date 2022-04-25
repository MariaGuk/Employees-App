import axios from 'axios';
import { useMutation } from "react-query";
import { client } from "App"

const editEmployee = async ({ ...employeeFormData }) => {
  const { data } = await axios.put(`https://api-for-masha.herokuapp.com/api/employees/${employeeFormData.activeEmployeeId}`, employeeFormData);

  return data;
};

const useEditEmployee = () => {
  return useMutation(editEmployee, {
    onSuccess: () => {
      client.invalidateQueries('employees');
    }
  })
};

export { useEditEmployee };