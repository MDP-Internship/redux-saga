import List from "../../components/list/List";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Filtered(){

    const location = useLocation();
    const price =location.state.value;
    const name =location.state.search;
    const category =location.state.category;

    const products= useSelector((state)=>state.data.products);
           
    let filteredProducts= products.filter((value, index, array) => {
        return value.price<=price[1] && value.price>=price[0];
    })               
    
    if(name!==""){      
        filteredProducts= filteredProducts.filter((value, index, array) => {
            return ((value.title).toLowerCase()).includes(name)===true;
        });
    }
    if(category!==""){
        filteredProducts= filteredProducts.filter((value, index, array) => {
            return value.category===category;
        })
    }

    return( 
    <div className="header">
        <List products={filteredProducts} />
    </div>  
 
    )
}

export default Filtered;