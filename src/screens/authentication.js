import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ValidationTextField from './routes/style/TextField.style';
import { CustomButton } from '../components/CustomButton.style';
import { primary } from '../constants/theme';
import { getLoginRequest } from '../store/authentication/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { responseStatusEnum } from '../constants/responseStatus';
import CircularProgress from '@mui/material/CircularProgress';

function Authentication() {
    const [loginData, setLoginData] = useState(
        {
            username: 'mor_2314',    //mor_2314
            password: '83r5^_',    //83r5^_
        });

    const formData = (name) => (event) => {
        setLoginData(p => ({ ...p, [name]: event.target.value }))
    }

    const sendDataDispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector((state) => state.login.responseStatus);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (status === responseStatusEnum.success) {
            setLoading(false)
            localStorage.setItem("username", loginData.username);
            localStorage.setItem("password", loginData.password);
            navigate("/ShowAll")
        };
        if (status === responseStatusEnum.loading) setLoading(true);

    }, [status, loginData, navigate])

    return (
        <div className="header" style={{ marginTop: 70 }}>
            <h1 style={{ color: primary }} >Welcome to Store</h1>
            <h3 >Please Login</h3>
            <Box sx={{ display: 'flex', marginRight: '25%', marginLeft: '25%', alignContent: 'space-between' }}>
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={6} >
                        {/* NOTE: çok problu componenleri bu şekilde yaparsak daha okunaklı olur :D */}
                        <ValidationTextField
                            label={'Username'}
                            id="username"
                            value={loginData.username ?? ''}
                            margin="normal"
                            size="small"
                            style={{ marginLeft: 40 }}
                            onChange={formData("username")} />
                    </Grid>
                    <Grid item xs={6} >
                        <ValidationTextField
                            label={'Password'}
                            id="password"
                            type="password" // password prop geçilmeli
                            margin="normal"
                            value={loginData.password ?? ''}
                            size="small"
                            onChange={formData("password")}
                        />
                    </Grid>
                </Grid>
            </Box>
            <CustomButton style={{ marginTop: 40 }} variant="outlined" onClick={() => { sendDataDispatch(getLoginRequest(loginData)) }}>LOGIN</CustomButton>
            {
                loading === true && (
                    <div className="header">
                        <Box sx={{ marginTop: 10 }}>
                            <CircularProgress size={50} />
                        </Box>
                    </div>

                )
            }
        </div>

    )
}

export default Authentication;