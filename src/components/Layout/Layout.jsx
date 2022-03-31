import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { ROUTES } from "../../constants/routes";
import { StyledNav, useStyles, Box } from "./styled";

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <StyledNav>
              {ROUTES.map((route) => (
                <Link key={route.path} to={route.path} className={classes.link}>
                  {route.title}
                </Link>
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
