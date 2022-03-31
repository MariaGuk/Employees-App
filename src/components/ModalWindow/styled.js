import styled from 'styled-components';
import Box from '@mui/material/Box';


const StyledBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxWidth: '100%',
  backgroundColor: 'white',
  border: '2px solid #222020',
  boxShadow: 10,
  padding: '40px',
  overflow: 'hidden',
  "& .MuiTextField-root": { marginBottom: '30px', width: "500px" }
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const ButtonsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const StyledButton = styled('button')({
  padding: '10px 60px',
  letterSpacing: '0.7px'
});

const TextFieldsContainer = styled('div')({
  margin: '30px 0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export { StyledButton, StyledBox, Container, ButtonsContainer, TextFieldsContainer }