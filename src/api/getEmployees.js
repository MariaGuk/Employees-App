import axios from 'axios';
import { useQuery } from "react-query";
import { client } from 'App';

const getEmployees = async () => {
  const { data } = await axios.get('https://api-for-masha.herokuapp.com/api/employees');

  return data;
};

const useGetEmployees = () => {
  return useQuery("employees", getEmployees)
};

const getEmployee = async (employeeId) => {
  const { data } = await axios.get(`https://api-for-masha.herokuapp.com/api/employees/${employeeId.activeEmployeeId}`);

  return data;
};

const useGetEmployee = (employeeId) => {
  return useQuery(['employee', { employeeId }], getEmployee, {
    initialData: () => {
      const employee = client.getQueryData('employee')?.data?.find((employee) => employee.id === employeeId)

      if (employee) {
        return { data: employee }
      } else {
        return undefined;
      }
    }
  })
};

export { useGetEmployees, useGetEmployee };