import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ValidationTextField from './routes/style/TextField.style';
import { CustomButton } from '../components/CustomButton.style';
import {primary}  from '../constants/theme';
import { getLoginRequest } from '../store/authentication/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { responseStatusEnum } from '../constants/responseStatus';
import CircularProgress from '@mui/material/CircularProgress';

function Authentication(){   
    const [loginData, setLoginData]=useState(
        {
            username: 'username',    //mor_2314
            password: 'password',    //83r5^_
        });

    const formData=(name)=>(event)=>{
        setLoginData(p=>({...p, [name]:event.target.value}))
    }

    const sendDataDispatch=useDispatch();
    const navigate = useNavigate();
    const status= useSelector((state) => state.login.responseStatus);
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        if(status===responseStatusEnum.success){
            setLoading(false)
            navigate("/Home")
        };
        if(status===responseStatusEnum.loading) setLoading(true);

    }, [status, navigate] )
    
    return(
        <div className="header">
            <h1 style={{color: primary}} >Welcome to Store</h1>
            <h3 >Please Login</h3>
            <Box  sx={{ display:'flex',marginRight: '25%',marginLeft: '25%', alignContent: 'space-between' }}> 
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={6} >
                        <ValidationTextField label={'Username'} id="username" margin="normal" size="small" style={{ marginLeft: 40  }} onChange={formData("username")}/>
                    </Grid>
                    <Grid item xs={6} >
                        <ValidationTextField label={'Password'} id="password" margin="normal" size="small" onChange={formData("password")}/>
                    </Grid>                
                </Grid>                         
            </Box> 
            <CustomButton variant="outlined" onClick={()=>{sendDataDispatch(getLoginRequest(loginData))}}>LOGIN</CustomButton> 
            {
                loading===true &&(
                    <div className="header">
                        <Box sx={{ marginTop:10 }}>
                            <CircularProgress size={50} />
                        </Box>
                    </div>
                    
                )
            }
        </div>
            
)}

export default Authentication;



/*
        const initData={
            username: 'username',    //mor_2314
            password: 'password',    //83r5^_
        }
        const [state,dispatch]= useReducer((state,action)=>{
switch (action.type) {
    case 'add':
       return ( {...p, [name]:event.target.value})
        break;
        case 'delete'

    default:
        break;
}
        })
*/