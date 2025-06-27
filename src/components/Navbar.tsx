import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <Container>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' sx={{flexGrow: 1}}>
            Books Library
          </Typography>
          <Box sx={{display: "flrx", gap: 2}}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/books">Books List</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;