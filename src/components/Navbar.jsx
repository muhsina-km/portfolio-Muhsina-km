import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SKILLS', path: '/skills' },
  { name: 'WORKS', path: '/works' },
  { name: 'RESUME', path: '/resume' },
  { name: 'CONTACT', path: '/contact' },
];

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333333' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons on small screens
              justifyContent: { xs: 'center', sm: 'space-evenly' }, // Center for mobile, evenly spaced for larger screens
              alignItems: 'center',
              gap: { xs: 1, sm: 0 }, // Add spacing between buttons for mobile
              padding: { xs: 1, sm: 0 }, // Add padding for mobile
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{
                  color: 'white',
                  display: 'block',
                  width: { xs: '100%', sm: 'auto' }, // Full-width buttons on mobile
                  textAlign: 'center',
                  padding: '10px 20px',
                  fontSize: { xs: '0.9rem', sm: '1rem' }, // Adjust font size for smaller screens
                  textTransform: 'uppercase',
                }}
                component={Link}
                to={page.path}
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

export default Navbar;
