import styled from 'styled-components';
import Card from "@mui/material/Card";

const Box = styled('div')({
  backgroundColor: '#D0C6D2',
  backgroundSize: 'cover',
  minHeight: '100vh',
  padding: '26px 50px ',
});

const Header = styled('p')({
  fontSize: '26px',
  fontWeight: 600,
  letterSpacing: '1.3px',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '50px',
})

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
})

const StyledCard = styled(Card)({
  maxWidth: '330px',
  width: '100%',
  padding: '20px',
  marginBottom: '70px',
});

const CardActions = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
});

const CardContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: '10px'
});

const ButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '100px'
});

export { Box, Header, StyledCard, CardActions, CardContent, Container, ButtonContainer };
