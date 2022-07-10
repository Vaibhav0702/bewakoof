import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addProductCart, addProductWish, getSingleProduct } from '../../Redux/Products/action';


import "./ProDetails.css"
import { AiOutlineHeart } from 'react-icons/ai';
import ListProduct from './ListProduct';




const ProductDetails = () => {



    const navigate = useNavigate();

    const { product_id } = useParams();

    console.log("id : ", product_id)


    const dispatch = useDispatch();

    const currentProduct = useSelector(store => store.ecommerceData.currentProduct);

    console.log("Current Product", currentProduct)



    useEffect(() => {

        if (product_id) {
            dispatch(getSingleProduct(product_id, navigate));
        }



    }, [dispatch, navigate, product_id] )



    const addToCartHandler = () => {

        currentProduct && dispatch(addProductCart(currentProduct ,navigate));

      

    }


    const addToWishHandler = () => {

        currentProduct && dispatch(addProductWish(currentProduct ,navigate));



    }



    const Rating = Math.random().toFixed(1) * ((4 - 2 + 1) + 2);


    return (
        <>

            {/* <div className='productDabba'   > 

                  <div className="imgDabba">
                          <img src={currentProduct.image} alt="" />
                  </div>


                  <div className="textDabba">

                        <div style={{margin:"0px" , color:"silver"}}><h2>Bewakoof</h2></div>
                       <div className="titleDabba"><h2>{currentProduct.name}</h2></div>

                        <div className='priceDabba'>
                               
                            <div>
                                ₹  {currentProduct.price}
                            </div>

                            <div>

                                <span className="cancelprice"> ₹ {currentProduct.canceledprice}</span>

                            </div>
                           <span style={{color:"silver"}}   > {currentProduct.tribe} </span> 
                        </div>


                        <div className="Rating">


                          {Rating} ⭐

                        </div>



                        <div className="Cartdiv">
                            <div className="CartButton">
                                <button onClick={addToCartHandler} >
                                    Add To Cart
                                </button>
                                <p> 🚚 2-3 business days delivery</p>
                               
                            </div>

                            <div >
                                <AiOutlineHeart    onClick={addToWishHandler} className="productwishicon" />
                            </div>
                        </div>

                    </div>


            </div> */}




            <ListProduct

                image={currentProduct.image}

                name={currentProduct.name}

                price={currentProduct.price}

                canceledprice={currentProduct.canceledprice}

                tribe={currentProduct.tribe}

                Rating={Rating}

                CartHandler={addToCartHandler}

                WishHandler={addToWishHandler}

                wish={<button><AiOutlineHeart /></button>}

                addtocart={"Add To Cart"}

                line={"🚚 2-3 business days delivery"}

            />

        </>
    )
}

export default ProductDetails