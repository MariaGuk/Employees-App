import React from "react";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import { Box, StyledCard, CardContent } from "./styled";

const Profile = ({ employeeProfile }) => {
  return (
    <Box>
      {employeeProfile &&
        employeeProfile.map((employee) => (
          <StyledCard key={employee._id}>
            <CardMedia
              component="img"
              height="200"
              image={employee.avatar}
              alt="avatar"
            />
            <CardContent>
              <Typography>First Name: {employee.firstName}</Typography>
              <Typography>Last Name: {employee.lastName}</Typography>
              <Typography>Email:{employee.email}</Typography>
              <Typography>Age: {employee.age}</Typography>
            </CardContent>
          </StyledCard>
        ))}
    </Box>
  );
};

export default Profile;
