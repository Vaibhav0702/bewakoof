


import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../Redux/Products/action';
import ListProduct from '../Products/ListProduct';



const Cart = () => {


    const cart = useSelector((store) => store.ecommerceData.cart);


    console.log("cart : ", cart)



    const dispatch = useDispatch()


    useEffect(() => {


        dispatch(fetchCart());


    }, [dispatch])



    const Rating = Math.random().toFixed(1) * ((4 - 2 + 1) + 2);


    return (
        <>

            {

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







                        

                    />



                })




            }







        </>
    )
}

export default Cart



