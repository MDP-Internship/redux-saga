import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addNewProductRequest } from '../../store/addProduct/addAction'
import Button from '@mui/material/Button'
//import { Button } from '../../styles/button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ValidationTextField from '../../styles/form_style'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { CustomButton } from '../../constants/CustomButton.style'
import FormControl from '@mui/material/FormControl';
import { primary, secondary } from '../../constants/theme'
import Stack  from '@mui/material/Stack';

function AddProduct(){

    const [isFormShown, setIsFormShown]= useState(false);
    const [isMessageShown, setIsMessageShown]= useState(false);
    const [isDisabled, setIsDisabled]= useState(false);
    const [flag, setFlag] = useState(true);  

    const currencies = [
        {
          value: 'jewelery',
          label: 'jewelery',
        },
        {
          value: 'electronic',
          label: 'electronic',
        },
        {
          value: "men's clothing",
          label: "men's clothing",
        },
        {
          value: "women's clothing",
          label: "women's clothing",
        },
    ];

    const [input, setInput]=useState(
    {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    });

    const formShow=()=>{     
        setIsFormShown(!isFormShown);
        setFlag(!flag);
        setIsDisabled(false);
    }

    const formData=(name)=>(event)=>{
        setInput(p=>({...p, [name]:event.target.value}))
        console.log(input);
    }

    const sendDataDispatch=useDispatch();    

    const sendData=()=>{   
        sendDataDispatch(addNewProductRequest(input));
        setIsDisabled(true);
        setIsMessageShown(true);
    }

    return(
        <div>
            <CustomButton variant="outlined" textcolor={flag ?  primary :secondary} onClick={formShow}>Add New Product</CustomButton>
            {
                isFormShown===true && (
                    <div>
                         <Box  sx={{ display:'flex',marginRight: '25%',marginLeft: '25%', alignContent: 'space-between' }}> 
                            <Grid container rowSpacing={1} columnSpacing={1}>
                                <Grid item xs={6} >
                                    <ValidationTextField label={'Title'} id="title" margin="normal" size="small" style={{ marginLeft: 40  }} onChange={formData("title")}/>
                                </Grid>
                                <Grid item xs={6} >
                                    <ValidationTextField label={'Price'} id="price" margin="normal" size="small" onChange={formData("price")}/>
                                </Grid>
                                <Grid item xs={6.7} >
                                   <ValidationTextField label={'Description'} id="description" margin="normal" size="small" onChange={formData("description")}/>
                                </Grid>
                                <Grid item xs={5.3}>
                                  <FormControl sx={{minWidth:'70%'}}>
                                    <ValidationTextField
                                      id="outlined-select-currency"
                                      size="small"
                                      margin='normal'
                                      select
                                      label="Category"
                                      onChange={formData("category")}
                                    >
                                      {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                        </MenuItem>
                                      ))}
                                    </ValidationTextField>
                                  </FormControl>
                                </Grid>
                            </Grid>                         
                        </Box> 
                        <Stack direction="row" sx={{justifyContent:"center"}}>
                          <CustomButton disabled={isDisabled} variant="outlined" onClick={sendData}>SEND</CustomButton>
                            {
                              isMessageShown && <Grid sx={{marginTop:2, marginLeft:5}}>{"New product has send!"}</Grid>
                            }
                        </Stack>

                        
                    </div>
                )
            }
        </div>
    )

}

export default AddProduct;

// <ValidationTextField label={'Category'} id="category" margin="normal" size="small" onChange={formData("category")}/>
