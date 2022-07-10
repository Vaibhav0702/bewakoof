


import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../../pages/EmptyCart';
import { deleteProductCart, fetchCart } from '../../Redux/Products/action';
import ListProduct from '../Products/ListProduct';



const Cart = () => {


    const cart = useSelector((store) => store.ecommerceData.cart);


    console.log("cart : ", cart.length)



    const dispatch = useDispatch()


    useEffect(() => {


        dispatch(fetchCart());


    }, [dispatch])




    const removeProduct = (id) => {
  
        console.log("Going to remove product" , id)
    
        dispatch(deleteProductCart(id));
    
    
      }



    const Rating = Math.random().toFixed(1) * ((4 - 2 + 1) + 2);


    return (
        <>
            {
                 cart.length === 0 ? 
               
               <EmptyCart/>
               
                 :
              
              <>   {

               cart && cart.map((currentProduct) => {

                    return <ListProduct
                        product_id={currentProduct.id}

                        image={currentProduct.image}

                        name={currentProduct.name}

                        price={currentProduct.price}

                        canceledprice={currentProduct.canceledprice}

                        tribe={currentProduct.tribe}

                        addtocart={"Remove"}

                        Rating={Rating}

                        CartHandler={()=>removeProduct(currentProduct.id)}

                    />



                })

  
            } 

            </>

            }







        </>
    )
}

export default Cart



