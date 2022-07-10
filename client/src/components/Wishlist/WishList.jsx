

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EmptyWish from '../../pages/EmptyWish';
import { deleteProductWish, fetchWish } from '../../Redux/Products/action';
import ListProduct from '../Products/ListProduct';

const WishList = () => {


    const wishlist = useSelector((store) => store.ecommerceData.wishlist);


    const currentProduct = useSelector(store => store.ecommerceData.currentProduct);

    console.log("Current Product", currentProduct)


    console.log("Wish :", wishlist)



    const dispatch = useDispatch()


    useEffect(() => {


        dispatch(fetchWish());


    }, [dispatch])



    const Rating = Math.random().toFixed(1) * ((4 - 2 + 1) + 2);




    const removeProduct = (id) => {

        console.log("Going to remove product", id)

        dispatch(deleteProductWish(id));


    }


    return (


        <>
            {wishlist.length === 0 ? <EmptyWish /> :
                <> {

                    wishlist && wishlist.map((currentProduct) => {

                        return <ListProduct
                            product_id={currentProduct.id}

                            image={currentProduct.image}

                            name={currentProduct.name}

                            price={currentProduct.price}

                            canceledprice={currentProduct.canceledprice}

                            tribe={currentProduct.tribe}

                            addtocart={"Add To Cart"}

                            Rating={Rating}



                            wish={<button onClick={() => removeProduct(currentProduct.id)}>Remove</button>}



                        />



                    })




                }

                </>

            }


        </>
    )
}

export default WishList