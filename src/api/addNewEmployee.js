import axios from 'axios';

const addNewEmployee = async ({ ...employee }) => {
  const { data } = await axios.post('https://api-for-masha.herokuapp.com/api/employees', employee,
  );

  return data;
};

export { addNewEmployee } 