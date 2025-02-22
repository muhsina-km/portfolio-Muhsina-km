import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 

const pages = [
  { name: 'ABOUT', path: '/' },
  { name: 'SKILLS', path: '/skills' },
  { name: 'WORKS', path: '/works' },
  { name: 'RESUME', path: '/resume' },
  { name: 'CONTACT', path: '/contact' },
];

function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" 
    sx={{ backgroundColor: '#333333'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >

            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  textTransform: 'uppercase', // Optional: makes the text uppercase
                }}
                component={Link}
                to={page.path} // Use Link's 'to' prop for navigation
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
