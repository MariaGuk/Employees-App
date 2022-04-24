import React from "react";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import { Box, StyledCard, CardContent } from "./styled";

const Profile = ({ data, isSuccess }) => {
  return (
    <Box>
      {isSuccess &&
        data.map((item) => (
          <StyledCard key={item._id}>
            <CardMedia
              component="img"
              height="200"
              image={item.avatar}
              alt="avatar"
            />
            <CardContent>
              <Typography>First Name: {item.firstName}</Typography>
              <Typography>Last Name: {item.lastName}</Typography>
              <Typography>Email:{item.email}</Typography>
              <Typography>Age: {item.age}</Typography>
            </CardContent>
          </StyledCard>
        ))}
    </Box>
  );
};

export default Profile;
