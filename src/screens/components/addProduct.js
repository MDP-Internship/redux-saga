import { useState} from 'react'

function AddProduct(){

    const [isFormShown, setIsFormShown]= useState(false);

    const [input, setInput]=useState({
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
      });

    const formShow=()=>{     
        setIsFormShown(!isFormShown);
    }


    return(
        <div class="header">
            <button onClick={formShow}>"ADD NEW PRODUCT"</button>
            {
                isFormShown===true && (
                    <div>
                        

                    </div>
                )
            }
        </div>
    )

}

export default AddProduct;