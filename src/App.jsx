import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { Routes, Route } from "react-router-dom";

import { ROUTEPATHS } from "constants/routes";
import Layout from "components/Layout";
import EmployeesContainer from "pages/Employees";
import ProfileContainer from "pages/Profile";

const client = new QueryClient();

function App() {
  return (
    <Layout>
      <QueryClientProvider client={client}>
        <Routes>
          <Route path={ROUTEPATHS.employees} element={<EmployeesContainer />} />
          <Route path={ROUTEPATHS.profile} element={<ProfileContainer />} />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Layout>
  );
}

export { App, client }
