import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { ROUTES } from "constants/routes";

import { StyledNav, StyledLink, Box } from "./styled";

const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <StyledNav>
              {ROUTES.map((route) => (
                <StyledLink key={route.path} to={route.path} >
                  {route.title}
                </StyledLink>
              ))}
            </StyledNav>
          </Toolbar>
        </Container>
      </Box>
      {children}
    </>
  );
};

export default Layout;
