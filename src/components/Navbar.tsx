import React from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Container>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            Books Library
          </Typography>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/books">Books List</Button>

            {isLoggedIn ? (
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            ) : (
              <IconButton
                color="inherit"
                onClick={() => navigate('/login')}
                title="Login"
              >
                <LoginIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
