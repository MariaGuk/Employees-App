import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useGetProfile } from "api/getProfile";

import Profile from "./Profile";

function ProfileContainer() {
  const { data, isLoading, isError, isSuccess, error } = useGetProfile();

  if (isLoading)
    return (
      <LinearProgress />
    );
  if (isError) return <h2>{error.message}</h2>;

  return <Profile data={data} isSuccess={isSuccess} />;
}

export default ProfileContainer;
