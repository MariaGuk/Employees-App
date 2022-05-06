import axios from 'axios';
import { useMutation } from "react-query";

import { client } from 'App';
import { API, URL } from 'constants/routes';
import { QUERY_KEYS } from 'constants/queryKeys';

const addNewEmployee = async ({ ...employee }) => {
  const { data } = await axios.post(`${URL}/${API.getEmployees}`, employee);

  return data;
};

const useAddNewEmployee = () => {
  return useMutation(addNewEmployee, {
    onSuccess: () => {
      client.invalidateQueries(QUERY_KEYS.employees);
    }
  })
};

export { useAddNewEmployee } 