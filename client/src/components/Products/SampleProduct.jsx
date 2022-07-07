



import React from 'react'
import "./Sample.css"


import { AiOutlineHeart } from "react-icons/ai";






const SampleProduct = ({
    productimage_url,
    productname,
    productprice,
    productcancelprice,
    producttribe,
}) => {
    return (
        <>


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

                        <div >
                            <AiOutlineHeart className="productwishicon" />
                        </div>
                    </div>















                </div>




















            </div>

        </>
    )
}

export default SampleProduct