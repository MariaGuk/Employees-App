import axios from 'axios';

// const editEmployee = async ({ employeeId, ...data }) => {
//   const response = await axios.put(`https://api-for-masha.herokuapp.com/api/employees/${employeeId}`,
//     { body: JSON.stringify(data) }
//   );

//   return response.data;
// };

const editEmployee = async ({ employeeId, ...data }) => {
  const response = await axios.put(`https://api-for-masha.herokuapp.com/api/employees/${employeeId}`,
    { body: JSON.stringify(data) });
  return response.data;
}

export { editEmployee };