import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
//import { getDataRequest } from '../../store/data/dataAction'
import { getDataRequest } from '../../store/data/dataSlice';
import { CustomButton } from '../../components/CustomButton.style'
import { primary, secondary } from '../../constants/theme'
import List from '../../components/list/List'

function ShowAll(){

    const dispatch = useDispatch()     
    const [isShown, setIsShown]= useState(false);   
    const [flag, setFlag] = useState(true);  

    const clickHandler=()=>{
        dispatch(getDataRequest());
        setIsShown(!isShown);
        setFlag(!flag);
    }
   
    const products = useSelector((state) => state.data.products);
    //const state = useSelector((state) => state);
    //console.log(state);

    return(
    <div className="header">      
        <CustomButton variant="outlined" textcolor={flag ?  primary :secondary} onClick={() => {clickHandler()}}>
          Show all products
        </CustomButton> 

        {
          (products?.loading && products?.length === 0) ? 
          (<div>Loading</div>)
          :
          ((isShown===true)&&(
            <List products={products} />
          ))
        }       
    </div>
    )

}

export default ShowAll;