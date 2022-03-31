import axios from 'axios';

const deleteEmployee = async (employeeId) => {
  await axios.delete(`https://api-for-masha.herokuapp.com/api/employees/${employeeId}`);

  return true;
};


export { deleteEmployee }