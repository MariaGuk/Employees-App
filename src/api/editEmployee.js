import axios from 'axios';
import { useMutation } from "react-query";

const editEmployee = async (employeeId) => {
  const response = await axios.put(`https://api-for-masha.herokuapp.com/api/employees/${employeeId.activeEmployeeId}`, 
  )

  return response.data;
};

const useEditEmployee = () => {
  return useMutation(editEmployee)
};

export { useEditEmployee };