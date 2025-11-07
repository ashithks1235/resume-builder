import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    const aboutUs = "Behind every great idea is a great team. See how we’re building something amazing together!"
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"whitesmoke"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img className="rounded" width="40px" src="https://t4.ftcdn.net/jpg/01/39/64/23/360_F_139642321_ptZco8pbwESSjMnsxjx6KXg4DkoCmHES.jpg" alt='logo'></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-dark text-decoration-none'>rBuilder</Link>
          </Typography>
          <Tooltip title={aboutUs}><Button color="inherit" className='font-weight-bold text-dark'>About US</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>  )
}

export default Header