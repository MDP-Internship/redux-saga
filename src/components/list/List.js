import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addProduct} from '../../store/basket/basketSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function ListProduct( {products}){

    const dispatch = useDispatch()

    return(

    <div >
      <Grid container sx={{marginLeft:10, width:"auto", '&::-webkit-scrollbar': {display: "none"}}}>
      {products.map((item) => (
        <Card sx={{ maxWidth: 270, margin:1,}} key={item.id}>
          <Link to={`/product/`+item.id} style={{ textDecoration: 'none', color:"black" }}>
            <CardMedia
              component="img"
              height="auto"
              width="260"
              src={item.image}
              alt="green iguana"
              sx={{objectFit: "fill", maxHeight:270, padding:1,}}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${item.price}
            </Typography>
          </CardContent>
          <CardActions >
            <IconButton
                onClick={()=>dispatch(addProduct(item))}
                sx={{ color: "#32a436" }}
                aria-label={`info about ${item.title}`}
              >
                <AddShoppingCartIcon />
            </IconButton>
            <Button size="small" color='secondary' component={Link} to={`/product/`+item.id}>Learn More</Button>
          </CardActions>
        </Card>
      ))}
      </Grid>
 
    </div>
    )
} 

export default ListProduct;