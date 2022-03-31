import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useQuery, } from "react-query";

import { getEmployees } from "../../api/getEmployees";

import Employees from "./Employees";

const EmployeesContainer = () => {
  
  const { data, isLoading, isError, error } = useQuery("employees", getEmployees,);

  if (isLoading)
    return (
      <>
        <LinearProgress />
        <h2>Please wait...</h2>
      </>
    );
  if (isError) return <h2>{error.message}</h2>;

  return (
    <Employees
      data={data}
    />
  );
};

export default EmployeesContainer;
