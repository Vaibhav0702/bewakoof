


import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EmptyCart from '../../pages/EmptyCart';
import { addOrder, deleteProductCart, fetchCart } from '../../Redux/Products/action';
import ListProduct from '../Products/ListProduct';



const Cart = () => {


    const cart = useSelector((store) => store.ecommerceData.cart);


    console.log("cart : ", cart.length)



    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {


        dispatch(fetchCart());


    }, [dispatch])




    const removeProduct = (id) => {

        console.log("Going to remove product", id)

        dispatch(deleteProductCart(id));


    }



    const Rating = Math.random().toFixed(1) * ((4 - 2 + 1) + 2);



    const checkOutHandler = () => {

        dispatch(addOrder(cart, navigate))







    }


    return (
        <>
            {
                cart.length === 0 ?

                    <EmptyCart />

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

                                CartHandler={() => removeProduct(currentProduct.id)}

                            />



                        })


                    }

                        <div style={{ textAlign: "center", padding: "2%" }}>

                            <button cart={cart} onClick={checkOutHandler} style={{ width: "60%", cursor: "pointer", padding: "10px", color: "white", backgroundColor: "#4c9292", borderRadius: "10px", border: "none", alignItems: "center", boxShadow: " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>CheckOut</button>
                        </div>


                    </>

            }






        </>
    )
}

export default Cart



