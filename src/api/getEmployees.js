import axios from 'axios';
import { useQuery } from "react-query";

import { API, URL } from 'constants/routes';
import { QUERY_KEYS } from 'constants/queryKeys'

const getEmployees = async () => {
  const { data } = await axios.get(`${URL}/${API.getEmployees}`);

  return data;
};

const useGetEmployees = () => {
  return useQuery([QUERY_KEYS.employees], getEmployees)
};

export { useGetEmployees };