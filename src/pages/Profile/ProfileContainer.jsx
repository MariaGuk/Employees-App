import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useGetProfile } from "api/getProfile";

import Profile from "./Profile";

function ProfileContainer() {
  const { data: employeeProfile, isLoading: isEmployeeLoading } = useGetProfile();

  return (
    <>
      {isEmployeeLoading ?
        <LinearProgress /> :
        <Profile employeeProfile={employeeProfile} />
      }
    </>
  )
}

export default ProfileContainer;
