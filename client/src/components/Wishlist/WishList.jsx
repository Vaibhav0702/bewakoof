

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWish } from '../../Redux/Products/action';
import ListProduct from '../Products/ListProduct';

const WishList = () => {





    const wishlist = useSelector((store) => store.ecommerceData.wishlist);


    console.log("Wish :", wishlist)



    const dispatch = useDispatch()


    useEffect(() => {


        dispatch(fetchWish());


    }, [dispatch])



    const Rating = Math.random().toFixed(1) * ((4 - 2 + 1) + 2);






    return (


        <>
            {

                wishlist && wishlist.map((currentProduct) => {

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

export default WishList