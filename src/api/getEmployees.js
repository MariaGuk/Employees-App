import axios from 'axios';

const getEmployees = async () => {
  const { data } = await axios.get('https://api-for-masha.herokuapp.com/api/employees');

  return data;
};

const getEmployee = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [_key, { employeeId }] = queryKey;
  const { data } = await axios.get(`https://api-for-masha.herokuapp.com/api/employees/${employeeId}`);

  return data
};

export { getEmployees, getEmployee };