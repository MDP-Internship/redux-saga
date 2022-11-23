import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addNewProductRequest } from '../../store/addProduct/addAction'

function AddProduct(){

    const [isFormShown, setIsFormShown]= useState(false);

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
    }

    const formData=(name)=>(event)=>{
        setInput(p=>({...p, [name]:event.target.value}))
        console.log(input);
    }

    const sendDataDispatch=useDispatch();    

    const sendData=()=>{   
        sendDataDispatch(addNewProductRequest(input))  
        console.log("helo");
    }

    return(
        <div class="header">
            <button onClick={formShow}>ADD NEW PRODUCT</button>
            {
                isFormShown===true && (
                    <div>
                        <form>
                            <div>
                                <label for="title"> Title</label>
                                <input type="text" id="title" name="title"  onChange={formData("title")}/>
                            </div>    
                            <div>
                                <label for="price"> Price </label>
                                <input type="text" id="price" name="price"  onChange={formData("price")}/>     
                            </div>
                        </form>
                        <button onClick={sendData}>SEND</button>
                    </div>
                )
            }
        </div>
    )

}

export default AddProduct;