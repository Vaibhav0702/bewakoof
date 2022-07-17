


import React, { useEffect, useState } from 'react'
import "./MenHome.css"


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';



function WomenHome() {




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


                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/k-pop-collection-1x1-1656869929.gif" alt="" />

                                </Link>
                            </div>

                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/clearance-sale-1x1-w-1656399232.jpg" alt="" />
                                </Link>
                            </div>


                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Just-Arrived-Tie-Dye-Women-1657085194.gif" alt="" />
                                </Link>
                            </div>


                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/k-pop-collection-1x1-1656869929.gif" alt="" />
                                </Link>
                            </div>

                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/clearance-sale-1x1-w-1656399232.jpg" alt="" />
                                </Link>
                            </div>


                            <div className='caraDiv'>
                                <Link to={"/product"} style={{ textDecoration: "none" }} >
                                    <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Just-Arrived-Tie-Dye-Women-1657085194.gif" alt="" />
                                </Link>

                            </div>





                        </Carousel>;
                    </div>


                    {/* ------------------------------------------------------ */}


                    <div className="banner">
                        <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-women-1654149139.jpg" alt="" />
                    </div>

                    {/* --------------------------catagories-------------------- */}

                    <div className="catagories">


                        <div>

                            <img src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-best-seller-1637307127.jpg" alt="" />


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
                            <img src="https://images.bewakoof.com/uploads/grid/app/plus-size-women-thumbnail-1648115500.jpg" alt="" />

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
                                <img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-w-boyfriend-tees-1657007852.jpg" alt="" />
                            </div>


                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-w-fashion-tops-1657007854.jpg" alt="" />
                            </div>

                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-w-oversized-tees-1657090226.jpg" alt="" />
                            </div>


                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-w-dresses-1657007852.jpg" alt="" />
                            </div>

                            <div>
                                <img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-pyjamas-1654498951.jpg" alt="" />
                            </div>


                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-w-joggers-1657016648.jpg" alt="" /></div>



                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-w-shorts-1657016650.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-w-jeans-1657007854.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-mobile-covers-1654498949.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-w-boxers-1657007851.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-backpack-1654498944.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-w-printed-tees-1657016649.jpg" alt="" /></div>

                        </div>

                    </div>


                    {/* ----------------------------------Discount Box------------------------------------ */}


                    <div className='DiscountContainer'>

                        <h3>DISCOUNT PE DISCOUNT</h3>

                        <div className="DiscountBox">

                            <div><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-buy2get1-banner-refrehsment-1657087871.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/meshirt-women-1656488700.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/PlusSize-mid-size-banner-women-1657003959.jpg" alt="" /></div>
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


                            <div className='caraDiv'><img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/style-promotion-template-1x1-freshly-arrived-women-1656923018.gif" alt="" /></div>

                            <div className='caraDiv'>  <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/1x1-boyfriend-tees-women-1657026855.jpg" alt="" /></div>


                            <div className='caraDiv'> <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/B2A599-STATICBANNER-NEW-1656921487.jpg" alt="" /></div>


                            <div className='caraDiv'><img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/jeans-women-banner-1656681117.jpg" alt="" /></div>

                            <div className='caraDiv'><img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/style-promotion-template-1x1-freshly-arrived-women-1656923018.gif" alt="" /></div>

                            <div className='caraDiv'>  <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/1x1-boyfriend-tees-women-1657026855.jpg" alt="" /></div>


                            <div className='caraDiv'> <img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/B2A599-STATICBANNER-NEW-1656921487.jpg" alt="" /></div>


                            <div className='caraDiv'><img style={{ width: "100%" }} src="https://images.bewakoof.com/uploads/grid/app/jeans-women-banner-1656681117.jpg" alt="" /></div>


                        </Carousel>;
                    </div>


                    {/* ---------------------------Bargain Container------------------------------------ */}


                    <div className="BargainContainer">

                        <h3>BEST BARGAIN CORNER</h3>


                        <div className="BargainBox">

                            <div><img src="https://images.bewakoof.com/uploads/grid/app/budget-buy-05-1656338266.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-kurti-1656931159.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-varsity-1656931161.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/budget-buys-2-x-2-slider-women-1656931160.jpg" alt="" /></div>
                        </div>

                    </div>

                    {/* --------------------------------TopShop Collection-------------------------------------------- */}


                    <div className='DiscountContainer'>

                        <h3>THE STOOPID COLLECTION</h3>

                        <div className="DiscountBox">

                            <div><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-colorblock-joggers-w-1656925461.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/WhatsApp-Image-2022-05-17-at-3-08-31-PM-1656580715.jpeg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Kurtis-Women-1656489998.jpg" alt="" /></div>
                            <div><img src="https://images.bewakoof.com/uploads/grid/app/Kurtas-mid-size-banner-women1-1656404922.jpg" alt="" /></div>

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

export default WomenHome