import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect,} from 'react';
import { getLogout } from '../../../store/authentication/loginSlice';
import { useNavigate } from 'react-router-dom';
import { responseStatusEnum } from '../../../constants/responseStatus';
import { useSelector } from 'react-redux';

export default function Profile() {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const dispatch=useDispatch();    
    const navigate = useNavigate();
    const status= useSelector((state) => state.login.responseStatus);

    useEffect(()=>{
      if(status===responseStatusEnum.idle){
          navigate("/")
      };
  }, [status, navigate] 
  )
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleLogout = () => {
      dispatch(getLogout());
      setAnchorElUser(null);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    
  return (
    <Box sx={{ flexGrow: 0 }}>
        <Tooltip title={localStorage.getItem("username")}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={localStorage.getItem("username")} src="/static/images/avatar/2.jpg" />
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
          onClose={handleCloseUserMenu}
        >
            <Link to={`/AddProduct`} style={{ textDecoration: 'none', color:"black" }}>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Add Product</Typography>
              </MenuItem>
            </Link>

            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>

        </Menu>
    </Box>

  );
}
