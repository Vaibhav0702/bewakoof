



import React from 'react'
import "./Sample.css"


import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';






const SampleProduct = ({
    product_id,
    productimage_url,
    productname,
    productprice,
    productcancelprice,
    producttribe,
}) => {
    return (
        <>

            <Link style={{textDecoration:"none"}} to={`/products/${product_id}`} >


                <div className="ProductMain ">

                    <div className="ProducImage">

                        <img src={productimage_url} alt="img" />

                    </div>

                    <div className="ProductDescription">
                        <div className="Producttitle" style={{ color: "darkgray" }}   > Bewakoof </div>
                        <div className="Producttitle"> {productname} </div>
                      
                        <div className="ProductPrice">
                            <div>
                                ₹  {productprice}
                            </div>

                            <div>

                                <span className="cancelprice"> ₹ {productcancelprice}</span>

                            </div>


                        </div>
                        <div className="pricetribe">
                            {producttribe}
                        </div>



                        <div className="Cartdiv">
                            <div className="CartButton">
                                <button  >
                                    Add
                                </button>
                            </div>

                            <div  className="CartButton" >
                                <button>
                                     <AiOutlineHeart  />
                                </button>
                               
                            </div>
                        </div>

                    </div>


                </div>



            </Link>

        </>
    )
}

export default SampleProduct