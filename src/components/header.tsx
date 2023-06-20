import { AppBar, Box, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { FC } from 'react'

interface headerProps {}

const Header: FC<headerProps> = () => {
  return (
    <header className='flex w-full text-quaternary p-10'>
      <Box sx={{ flexGrow: 1 }} alignItems="center">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              FrontEnd Challenge
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}

export default Header