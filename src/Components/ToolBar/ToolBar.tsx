import { NavLink } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import logo from '../../assets/logo.svg';

const ToolBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Logo Section */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt="Logo" style={{ height: 40 }} />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyBox
          </Typography>

          <Box>
            <Button color="inherit" component={NavLink} to="/">Home</Button>
            <Button color="inherit" component={NavLink} to="/about">About</Button>
            <Button color="inherit" component={NavLink} to="/contacts">Contacts</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ToolBar;