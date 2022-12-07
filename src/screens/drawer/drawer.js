import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText  from '@mui/material/ListItemText';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import DiamondIcon from '@mui/icons-material/Diamond';
import CategoryIcon from '@mui/icons-material/Category';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import HomeIcon from '@mui/icons-material/Home';

import { NavLink} from 'react-router-dom'
import { primary, secondary } from '../../constants/theme'
import { Main } from './styles/Main.style';
import { AppBar } from './styles/AppBarr.style';
import { DrawerHeader } from './styles/DrawerHeader.style';
import '../../styles/Main.css'

const drawerWidth = 240;

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" noWrap component="div">
              Store
            </Typography>
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

        <List>

        <NavLink to={`/`} style={{ textDecoration: 'none' }}>
          <ListItem disablePadding>              
            <ListItemButton>
              <ListItemIcon sx={{ color: primary }}>  <HomeIcon  /> </ListItemIcon>
              <ListItemText sx={{ color: secondary }}>Home</ListItemText>
            </ListItemButton>                  
          </ListItem>
        </NavLink> 
        
        <NavLink to={`/Showall`} style={{ textDecoration: 'none' }}>
          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon sx={{ color: primary }}>  <DiamondIcon /> </ListItemIcon>                  
                  <ListItemText sx={{ color: secondary }}>Show All Products</ListItemText>
              </ListItemButton>            
          </ListItem>
        </NavLink>
        
        <NavLink to={`/Categories`} style={{ textDecoration: 'none' }}>
          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon sx={{ color: primary }}>  <CategoryIcon /> </ListItemIcon>
                  <ListItemText sx={{ color: secondary }}>Show Categories</ListItemText>
              </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to={`/AddProduct`} style={{ textDecoration: 'none' }}>
          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon sx={{ color: primary }}>  <AddCircleOutlineIcon/> </ListItemIcon>
                  <ListItemText sx={{ color: secondary }}>Add Product</ListItemText>
              </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to={`/ShoppingBasket`} style={{ textDecoration: 'none' }}>
          <ListItem disablePadding>
              <ListItemButton>
                  <ListItemIcon sx={{ color: primary }}>  <ShoppingBasketTwoToneIcon/> </ListItemIcon>
                  <ListItemText sx={{ color: secondary }}>Shopping Cart</ListItemText>
              </ListItemButton>              
          </ListItem>
        </NavLink>

        </List>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />      
      </Main>

    </Box>
  );
}