import axios from 'axios';
import { useQuery } from "react-query";

import { API, URL } from 'constants/routes';
import { QUERY_KEYS } from 'constants/queryKeys';

const getProfile = async () => {
  const { data } = await axios.get(`${URL}/${API.getProfile}`);
  return data;
};

const useGetProfile = () => {
  return useQuery([QUERY_KEYS.profile], getProfile);
};

export { useGetProfile };