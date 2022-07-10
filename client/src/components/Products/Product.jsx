

import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { getProductsData } from '../../Redux/Products/action';
import Filterbox from './Filterbox';

import "./Product.css"
import SampleProduct from './SampleProduct';


const Product = () => {


    const products = useSelector((store) => store.ecommerceData.products)




    const [searchparams, setSearchParams] = useSearchParams();



    const dispatch = useDispatch();




    console.log("Products", products)






    useEffect(() => {



        if (products?.length === 0) {

            let params = {
                category: searchparams.get("category"),
                gender: searchparams.get("gender"),
                _sort: "payment",
                _order: searchparams.get("Sort"),


            };


            dispatch(getProductsData(params))



        }





    }, [dispatch, products?.length, searchparams, setSearchParams])




















    return (


        <>
         
                <div className="ProductContainer">

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