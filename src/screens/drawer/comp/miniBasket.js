import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function MiniBasket() {

  const [anchorElUser, setAnchorElUser] = useState(null);
  const inBasket=useSelector((state)=>state.basket.inBasket);  
  const a = useSelector((state) => state.data.products);
  const b = useSelector((state=>state.categorizedProduct.categorizedProducts))
  const products = a.length>0 ? a:b;
  let unit= inBasket.length;

  const handleOpenBasketMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseBasketMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
        <Tooltip title={"Basket"}>
            {/* <Link to={`/ShoppingBasket`} style={{ textDecoration: 'none', color:"white" }}>             */}
              <IconButton size="large" aria-label="show basket" color="inherit" onClick={handleOpenBasketMenu}>
                <Badge badgeContent={unit} color="secondary" max={10}>
                  <ShoppingBasketTwoToneIcon />
                </Badge>
              </IconButton>
        </Tooltip>

        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseBasketMenu}
        >
            {products.map((product)=>(   
            (inBasket.includes(product.id)===true) && 
                <Link to={`product/`+product.id} style={{ textDecoration: 'none', color:"black" }}>
                    <MenuItem key={product.id} onClick={handleCloseBasketMenu}>
                        <img className="miniImage" src={product.image} alt={product.title}/>
                        <Typography textAlign="center" color={"black"} sx={{fontSize:14, marginLeft:1}}>{(product.title).slice(0, 20)+'...'}</Typography>
                    </MenuItem>
                </Link>
            ))}

            <Link to={`/ShoppingBasket`} style={{ textDecoration: 'none', color:"black" }}>
              <MenuItem onClick={handleCloseBasketMenu}>
                <Typography textAlign="center">Go to Basket</Typography>
                <ShoppingCartCheckoutIcon color="primary"/>
              </MenuItem>
            </Link>

        </Menu>
    </Box>

  );
}
