import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TuneIcon from '@mui/icons-material/Tune';
import { Main } from './styles/Main.style';
import { AppBar } from './styles/AppBarr.style';
import { DrawerHeader } from './styles/DrawerHeader.style';
import '../../styles/Main.css'
import DrawerComp from './comp/drawerComp';
import Profile from './comp/profile';
import { Link } from 'react-router-dom';
import MiniBasket from './comp/miniBasket';

const drawerWidth = 240;

export default function NavBar() {
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box >
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar sx={{ justifyContent: "space-between" }}> 
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <TuneIcon />
          </IconButton>

          <Link to={`/Showall`} style={{ textDecoration: 'none', color:"white" }}>
            <Typography variant="h6" noWrap component="div">
              Store
            </Typography>
          </Link>
          
          <Box   m={1}
                 display="flex"
                 justifyContent="flex-end"
                 alignItems="flex-end"
          >
            <MiniBasket />
            <Profile/>
          </Box>          

        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />  
        <DrawerComp/>
        
      </Drawer>

      <Main open={open}>
        <DrawerHeader />      
      </Main>

    </Box>
  );
}