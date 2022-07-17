

import React, { useEffect, useState } from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';


import "./MenHome.css"




const AssesoriesHome = () => {





    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    const [loding, setLoding] = useState(true);


    useEffect(() => {
        setTimeout(() => {

            loding1();

        }, 1500)
    }, [])

    const loding1 = () => {

        setLoding(false);

    }







    return (



        <>
            {loding ? <div className='loding'><img src="https://images.bewakoof.com/web/bwkf-loading-anim-common.gif" alt="" /></div> :

                <div className='pageContainer'>

                    <div className='slider'>


                        <Carousel

                            swipeabl={true}
                            draggable={false}
                            showDots={true}
                            arrows={false}
                            responsive={responsive}

                            keyBoardControl={true}
                            infinite={true}

                            autoPlay={true}

                            autoPlaySpeed={2000}



                            className="carosal"

                        >


                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/ezgif-com-gif-maker--1--1651324109.gif" alt="" />
                                </Link>
                            </div>
                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/clearance-sale-1x1-common-1656399230.jpg" alt="" />
                                </Link>
                            </div>

                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/designer-cover-city-1656070119.jpg" alt="" />
                                </Link>
                            </div>


                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >

                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/unnamed-1656056673.gif" alt="" />

                                </Link>
                            </div>


                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/ezgif-com-gif-maker--1--1651324109.gif" alt="" />
                                </Link>
                            </div>

                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/clearance-sale-1x1-common-1656399230.jpg" alt="" />

                                </Link>
                            </div>

                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/designer-cover-city-1656070119.jpg" alt="" />

                                </Link>
                            </div>


                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/unnamed-1656056673.gif" alt="" />
                                </Link>
                            </div>









                        </Carousel>;
                    </div>


                    {/* ------------------------------------------------------ */}


                    <div className="banner">
                        <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg" alt="" />
                    </div>

                    {/* --------------------------catagories-------------------- */}

                    <div className="catagories">


                        <div>

                            <img src="https://images.bewakoof.com/uploads/grid/app/thumbnails-best-sellers-1653387856.jpg" alt="" />


                            <p>Best Seller</p>

                        </div>



                        <div>

                            <img src="https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1656050646.jpg" alt="" />


                            <p>Customization</p>

                        </div>


                        <div>
                            <img src="https://images.bewakoof.com/uploads/grid/app/LuckySizes-Thumbnail-1653069698.jpg" alt="" />

                            <p>Last Sizes Left</p>

                        </div>

                        <div>
                            <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-plus-size-1637307128.jpg" alt="" />

                            <p>Plus Size</p>

                        </div>

                        <div>
                            <img src="https://images.bewakoof.com/uploads/grid/app/thumbnails-mobile-covers-1653388044.jpg" alt="" />

                            <p>Mobile Covers</p>
                        </div>



                        <div>
                            <img src="https://images.bewakoof.com/uploads/grid/app/bwkf-offer-thumbnail-1651735001.jpg" alt="" />


                            <p>Coupon Offers</p>

                        </div>


                        <div>
                            <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-Acc-1653048927.jpg" alt="" />

                            <p>New Arrivals</p>

                        </div>

                        <div>
                            <img src="https://images.bewakoof.com/uploads/grid/app/vote-for-design-1641715844.jpg" alt="" />
                            <p>Votes for Designs</p>
                        </div>



                    </div>

                    {/* -------------------------------------------------------------------- */}

                    <div className="banner">
                        <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/ticker-banner1440x150-spend999-1656927056.gif" alt="" />
                    </div>

                    {/* ------------------------------------popular catogaries---------------------------------- */}




                    <div className='CatagoriesContainer'>

                        <h3>POPULAR CATEGORIES</h3>


                        <div className='CatoriesBox'>


                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1c-1654678208.png" alt="" />
                            </div>


                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/slider-box-1654677089.png" alt="" />
                            </div>

                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1p-1654678209.png" alt="" />
                            </div>


                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/flipflop-box-1654677086.png" alt="" />
                            </div>

                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/notebook-box-1654677088.png" alt="" />
                            </div>


                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1o-1654678209.png" alt="" /></div>


                        </div>

                    </div>





                    {/* ------------------------------------------------------------------------------ */}

                    <div className='slider'>


                        <Carousel

                            swipeabl={true}
                            draggable={false}
                            showDots={true}
                            arrows={false}
                            responsive={responsive}

                            keyBoardControl={true}
                            infinite={true}

                            autoPlay={true}

                            autoPlaySpeed={2000}



                            className="carosal"

                        >


                            <div className='caraDiv'><img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-Backpack-low-1646747551.gif" alt="" /></div>

                            <div className='caraDiv'>  <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/1x1-monsoon-ready-women-1654785496.gif" alt="" /></div>


                            <div className='caraDiv'> <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-New-Arrivals-Accessories--1--1652689573.jpg" alt="" /></div>


                            <div className='caraDiv'><img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Accessories-1656397807.gif" alt="" /></div>


                            <div className='caraDiv'><img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-Backpack-low-1646747551.gif" alt="" /></div>

                            <div className='caraDiv'>  <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/1x1-monsoon-ready-women-1654785496.gif" alt="" /></div>


                            <div className='caraDiv'> <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-New-Arrivals-Accessories--1--1652689573.jpg" alt="" /></div>


                            <div className='caraDiv'><img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Accessories-1656397807.gif" alt="" /></div>



                        </Carousel>;
                    </div>

                    {/* ----------------------------------Discount Box------------------------------------ */}


                    <div className='DiscountContainer'>

                        <h3>THE GANG'S FAVOURITE</h3>

                        <div className="DiscountBox">

                            <div><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Bags-1656667081.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Sliders-1656667081.jpg" alt="" /></div>


                        </div>

                    </div>




                </div>

            }
        </>
    )
}

export default AssesoriesHome