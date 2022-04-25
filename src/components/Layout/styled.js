import styled from 'styled-components'
import { Link } from "react-router-dom";

const StyledNav = styled('nav')({
  display: 'flex',
  flexDirection: 'row',
  margin: '0 auto',
});

const Box = styled('div')({
  backgroundColor: '#807A88'
});

const StyledLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  marginRight: '60px',
  fontSize: '16px',
  fontFamily: 'sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '1.2px'
});

export { StyledNav, Box, StyledLink };