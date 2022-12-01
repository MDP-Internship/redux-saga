import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText  from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DiamondIcon from '@mui/icons-material/Diamond';
import CategoryIcon from '@mui/icons-material/Category';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import {Link, NavLink} from 'react-router-dom'
import { primary, secondary } from '../../constants/theme'
import '../../styles/Main.css'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

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