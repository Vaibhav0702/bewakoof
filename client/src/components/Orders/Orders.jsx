import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../../pages/EmptyCart';
import { fetchOrder } from '../../Redux/Products/action';
import ListProduct from '../Products/ListProduct';

const Orders = () => {

    const orders = useSelector(store => store.ecommerceData.orders)

    console.log("orders : ", orders)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchOrder());

    }, [dispatch])


    const Rating = Math.random().toFixed(1) * ((4 - 2 + 1) + 2);



    return (
        <>

            {
                orders.length === 0 ?

                    <EmptyCart />

                    :

                    <>   {

                        orders && orders.map((currentProduct) => {

                            return <ListProduct
                                product_id={currentProduct.id}

                                image={currentProduct.image}

                                name={currentProduct.name}

                                price={currentProduct.price}

                                canceledprice={currentProduct.canceledprice}

                                tribe={currentProduct.tribe}

                                addtocart={" Shipping in 🚚 2-3 business days"}

                                Rating={Rating}

                              
                            />



                        })


                    }

                    </>

            }









        </>
    )
}

export default Orders