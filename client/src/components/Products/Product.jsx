

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { getProductsData } from '../../Redux/Products/action';
import Filterbox from './Filterbox';

import "./Product.css"
import SampleProduct from './SampleProduct';


const Product = () => {





    const products = useSelector((store) => store.ecommerceData.products.products)


    const dispatch = useDispatch();


    console.log("Products ", products)


    useEffect(() => {

        dispatch(getProductsData());





    }, [dispatch])












    return (


        <>


            <div className="ProductContainer">

                <h1 >Mens Ware</h1>



                <div className="productBox">


                    <div className="filterBox">

                        <Filterbox />


                    </div>

                    <div className='mapBox'>
                        {

                            products && products?.map((e) => {


                                return <div className="MensDiv" key={e.dataid} >
                                    <SampleProduct
                                        product_id={e.id}
                                        productimage_url={e.image}
                                        productname={e.name}
                                        productprice={e.price}
                                        productcancelprice={e.canceledprice}
                                        producttribe={e.tribe}

                                    />

                                </div>







                            })




                        }


                    </div>



                </div>





            </div>








        </>
    )
}

export default Product