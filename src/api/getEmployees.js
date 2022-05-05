import axios from 'axios';
import { useQuery } from "react-query";

const getEmployees = async () => {
  const { data } = await axios.get('https://api-for-masha.herokuapp.com/api/employees');

  return data;
};

const useGetEmployees = () => {
  return useQuery("employees", getEmployees)
};

export { useGetEmployees};