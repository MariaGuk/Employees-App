import axios from 'axios';
import { useMutation } from "react-query";

import { client } from "App";
import { API, URL } from 'constants/routes';
import { QUERY_KEYS } from 'constants/queryKeys'

const editEmployee = async ({ ...employeeFormData }) => {
  const { data } = await axios.put(`${URL}/${API.getEmployees}/${employeeFormData.activeEmployeeId}`, employeeFormData);
  
  return data;
};

const useEditEmployee = () => {
  return useMutation(editEmployee, {
    onSuccess: () => {
      client.invalidateQueries(QUERY_KEYS.employees);
    }
  })
};

export { useEditEmployee };