import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addNewProductRequest } from '../../store/addProduct/addAction'

function AddProduct(){

    const [isFormShown, setIsFormShown]= useState(false);

    const [input, setInput]=useState(
    [ {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }
    ]);

    const sendDataDispatch=useDispatch();

    const sendData=()=>{   
        sendDataDispatch(addNewProductRequest(input[0]))  
        console.log("helo");
    }


    const formShow=()=>{     
        setIsFormShown(!isFormShown);
    }

    return(
        <div class="header">
            <button onClick={formShow}>"ADD NEW PRODUCT"</button>
            {
                isFormShown===true && (
                    <div>
                        {input.map((element, index)=>(                          
                            <div key={index}>
                                <p>{element.title}</p>
                                <p>{element.price}</p>
                                <p>{element.description}</p>
                                <p>{element.category}</p>
                            </div>
                        ))}
                        <button onClick={sendData}>SEND</button>
                    </div>
                )
            }
        </div>
    )

}

export default AddProduct;