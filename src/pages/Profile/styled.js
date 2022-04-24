import styled from 'styled-components';
import Card from "@mui/material/Card";

const Box = styled('div')({
  backgroundColor: '#D0C6D2',
  backgroundSize: 'cover',
  minHeight: '100vh',
  padding: '60px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
const StyledCard = styled(Card)({
  maxWidth: '300px',
  width: '100%',
  padding: '30px 50px',
});

const CardContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20px',
})


export { Box, StyledCard, CardContent };