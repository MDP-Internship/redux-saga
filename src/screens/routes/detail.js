import { useParams } from "react-router-dom";
import * as React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleRequest } from "../../store/singleProduct/singleProductSlice";

function Detail(){
    const { productId } = useParams();

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getSingleRequest(productId))
    }, dispatch, [productId] )

    const product=useSelector((state)=>state.singleProduct.product)
   
    return(
    <div className="header"> 
        {product.title}
    </div>
    )
}

export default Detail;