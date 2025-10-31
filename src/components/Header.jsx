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
      <AppBar position="static" sx={{backgroundColor:"purple"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width="40px" src="https://cdn.dribbble.com/userupload/20559740/file/original-161c7cc4182d64d0c75555f686d780cc.png?resize=752x&vertical=center" alt='logo'></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>rBuilder</Link>
          </Typography>
          <Tooltip title={aboutUs}><Button color="inherit">About US</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>  )
}

export default Header