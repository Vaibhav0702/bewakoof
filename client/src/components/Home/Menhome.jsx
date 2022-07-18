import React, { useState } from 'react'
import { useEffect } from 'react';



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';


import "./MenHome.css"

const Menhome = () => {




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
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/active-wear-play-banner-new-1656938195.jpg" alt="" />
                                </Link>
                            </div>
                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Just-Arrived-Chino-Joggers-Men-1657087871.gif" alt="" />
                                </Link>
                            </div>


                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/clearance-sale-1x1-m-1656399231.jpg" alt="" />

                                </Link>
                            </div>

                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/active-wear-play-banner-new-1656938195.jpg" alt="" />
                                </Link>
                            </div>

                            <div className='caraDiv'>

                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Just-Arrived-Chino-Joggers-Men-1657087871.gif" alt="" />
                                </Link>
                            </div>

                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >

                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/clearance-sale-1x1-m-1656399231.jpg" alt="" />

                                </Link>
                            </div>






                        </Carousel>
                    </div>


                    {/* ------------------------------------------------------ */}


                    <div className="banner">
                        <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg" alt="" />
                    </div>

                    {/* --------------------------catagories-------------------- */}

                    <div className="catagories">






                        <div>

                            <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-best-seller-1637307127.jpg" alt="" />


                            <Link to={"/product"} style={{ textDecoration: "none" }} > <p>Best Seller</p>   </Link>

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
                            <img src="https://images.bewakoof.com/uploads/grid/app/thumbnail-personal-care-1656935144.jpg" alt="" />

                            <p>Personal Care</p>

                        </div>



                        <div>
                            <img src="https://images.bewakoof.com/uploads/grid/app/bwkf-offer-thumbnail-1651735001.jpg" alt="" />


                            <p>Coupon Offers</p>

                        </div>


                        <div>
                            <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-1637307130.jpg" alt="" />

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
                                <img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-m-printess-tees-1657007200.jpg" alt="" />
                            </div>


                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-m-plain-tees-1657007200.jpg" alt="" />
                            </div>

                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-m-oversized-tees-1657090225.jpg" alt="" />
                            </div>


                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-m-kurta-1657007199.jpg" alt="" />
                            </div>

                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-m-vests-1657007202.jpg" alt="" />
                            </div>


                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-m-shorts-1657007201.jpg" alt="" /></div>



                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-m-shirts-1657007201.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-m-joggers-1657007199.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1o-1654498506.png" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-m-boxers-1657007198.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1c-1654498500.png" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1p-1654498506.png" alt="" /></div>

                        </div>

                    </div>


                    {/* ----------------------------------Discount Box------------------------------------ */}


                    <div className='DiscountContainer'>

                        <h3>DISCOUNT PE DISCOUNT</h3>

                        <div className="DiscountBox">

                            <div><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-buy2get1-banner-refrehsment-1657087871.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/meshirt-men-1656488700.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/PlusSize-mid-size-banner-men-1657003958.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Buy-3-Official-1657003958.jpg" alt="" /></div>

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


                            <div className='caraDiv'><img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/B2A599-STATICBANNER-NEW-1656921487.jpg" alt="" /></div>

                            <div className='caraDiv'>  <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/style-promotion-template-1x1-freshly-arrived-men-1656922457.gif" alt="" /></div>


                            <div className='caraDiv'> <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Printed-Tshirts-Men-1657013699.jpg" alt="" /></div>


                            <div className='caraDiv'><img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/B2A599-STATICBANNER-NEW-1656921487.jpg" alt="" /></div>

                            <div className='caraDiv'>  <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/style-promotion-template-1x1-freshly-arrived-men-1656922457.gif" alt="" /></div>


                            <div className='caraDiv'> <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Printed-Tshirts-Men-1657013699.jpg" alt="" /></div>




                        </Carousel>;
                    </div>


                    {/* ---------------------------Bargain Container------------------------------------ */}


                    <div className="BargainContainer">

                        <h3>BEST BARGAIN CORNER</h3>


                        <div className="BargainBox">

                            <div><img src="https://images.bewakoof.com/uploads/grid/app/budget-buy-01-1656338265.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/budget-buy-02-1656338265.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/budget-buy-03-1656338266.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-slider-1656931160.jpg" alt="" /></div>
                        </div>

                    </div>

                    {/* --------------------------------TopShop Collection-------------------------------------------- */}


                    <div className='DiscountContainer'>

                        <h3>THE STOOPID COLLECTION</h3>

                        <div className="DiscountBox">

                            <div><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-joggers-men-1656925461.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-printed-boxer-m-1656668076.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Boxers-Men-2-1656580715.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/Printed-Shorts-mid-banner--1656489998.jpg" alt="" /></div>

                        </div>

                    </div>

                    {/* --------------------------------------------- */}

                    <div className="banner">
                        <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png" alt="" />
                    </div>

                    {/* ------------------------------------------------- */}

                    <div style={{ textAlign: "center" }}>
                        <h3>Customize your T-shirts</h3>
                    </div>

                    <div className="banner">
                        <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif" alt="" />
                    </div>



                </div>}

        </>
    )
}

export default Menhome