import axios from 'axios';
import { useMutation } from "react-query";

import { client } from 'App';
import { API, URL } from 'constants/routes';
import { QUERY_KEYS } from 'constants/queryKeys';

const deleteEmployee = async (employeeId) => {
  await axios.delete(`${URL}/${API.getEmployees}/${employeeId}`);

  return true;
};

const useDeleteEmployee = () => {
  return useMutation(deleteEmployee, {
    onSuccess: () => {
      client.invalidateQueries(QUERY_KEYS.employees);
    }
  });
};

export { useDeleteEmployee }