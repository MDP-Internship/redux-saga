import * as React from 'react';
import List from '@mui/material/List';
import SearchIcon from '@mui/icons-material/Search';
import { StyledInputBase } from '../styles/InputBase.style';
import { Search } from '../styles/Serach.style';
import { SearchIconWrapper } from '../styles/SearchIconWrapper.style';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../../styles/Main.css'
import Typography from '@mui/material/Typography';
import { CustomButton } from '../../../components/CustomButton.style';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDataRequest } from '../../../store/data/dataSlice';

function valuetext(value) {
  return `${value}`;
}

export default function DrawerComp() {

  const currencies = [
    {  value: 'jewelery'  },
    {  value: 'electronics' },
    {  value: "men's clothing" },
    {  value: "women's clothing" },
  ];

  const [value, setValue] = useState([0, 1000]);
  const [category, setCategory] = useState("");
  const [search, setSearh]=useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleChange = (event , newValue) => {
    setValue(newValue);
  };
   
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSearh=(event)=>{
    setSearh(event.target.value)
 }

  const handleFilter = () => {
    dispatch(getDataRequest());
    navigate("Filtered", {state:{value:value, category:category, search:search}})
  };

  
  return (
    <List className="header">
      <Typography noWrap component="div">  Filter products, find easily... </Typography>

      <Search sx={{ marginBottom:3, marginTop:3}}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearh}
        />
      </Search>   

      <Box sx={{ width: "80%", marginLeft:2.5, marginRight:2.5 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        max={1000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div>{"Price range: "+"$"+value[0]+"-"+"$"+value[1]}</div>
    </Box>

    <Box sx={{ minWidth: 120 , maxWidth: '90%', marginLeft:1, marginTop:3, marginBottom:3}}>
      <FormControl fullWidth size="small">
        <InputLabel id="select-label" color='primary'>Category</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={category}
          label="Category"
          onChange={handleCategory}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>            
          ))}
          <MenuItem value={""}> all</MenuItem>
        </Select>
      </FormControl>      
    </Box>
    
    <CustomButton variant="outlined"  onClick={()=>{handleFilter()}}>FILTER</CustomButton>     
    
    </List>
  );
}
