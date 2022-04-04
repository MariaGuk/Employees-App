import axios from 'axios';
import { useQuery } from "react-query";

const getProfile = async () => {
  const { data } = await axios.get('https://api-for-masha.herokuapp.com/api/profile');
  return data;
};

const useGetProfile = () => {
  return useQuery('getProfile', getProfile);
};

export { useGetProfile };