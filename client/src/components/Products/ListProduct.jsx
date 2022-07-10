
import React from 'react'
import { Link } from 'react-router-dom'


import "./ProDetails.css"

const ListProduct = ({

    image,
    name,
    price,
    canceledprice,
    tribe,
    Rating,
    CartHandler,
    WishHandler,
    wish,
    addtocart,
    line,
    product_id


}) => {
    return (
        <>

              

                <div className='productDabba'   >

                    <div className="imgDabba">
                        <img src={image} alt="" />
                    </div>


                    <div className="textDabba">

                        <div style={{ margin: "0px", color: "silver" }}><h2>Bewakoof</h2></div>


                        <Link   style={{textDecoration:"none"}}      to={`/wishlist/${product_id}`}>  <div className="titleDabba"><h2>{name}</h2></div></Link>

                        <div className='priceDabba'>

                            <div>
                                ₹  {price}
                            </div>

                            <div>

                                <span className="cancelprice"> ₹ {canceledprice}</span>

                            </div>
                            <span style={{ color: "silver" }}   > {tribe} </span>
                        </div>


                        <div className="Rating">


                            {Rating} ⭐

                        </div>



                        <div className="Cartdiv">
                            <div className="CartButton">
                                <button onClick={CartHandler} >
                                    {addtocart}
                                </button>
                                <p>{line}</p>

                            </div>

                            <div className="CartButton" onClick={WishHandler}  >
                                {wish}
                            </div>
                        </div>

                    </div>


                </div>


        </>
    )
}

export default ListProduct