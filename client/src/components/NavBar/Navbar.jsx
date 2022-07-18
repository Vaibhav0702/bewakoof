import "./Navbar.css";
import { Link } from "react-router-dom";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { DropdownMobile } from "./DropdownMobile";
import { DropdownMen } from "./DropdownMen";
import { DropdownWomen } from "./DropdownWomen";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, fetchOrder, fetchWish, getProductsData } from "../../Redux/Products/action";
import { Badge } from "@mui/material";








export const Navbar = () => {

  const [menHovering, setMenHovering] = useState(false);

  const [mobileHovering, setMobileHovering] = useState(false);

  const [womenHovering, setWomenHovering] = useState(false);


  const products = useSelector((store) => store.ecommerceData.products)

  const cart = useSelector((store) => store.ecommerceData.cart)

  const wish = useSelector((store) => store.ecommerceData.wishlist)

  const orders = useSelector((store) => store.ecommerceData.orders)

  const auth = useSelector((store) => store.authReducer.auth)

  console.log("cart", cart.length)


  console.log("orders", orders.length)


  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  console.log("navProducts", products)

  console.log(search);


  useEffect(() => {

    dispatch(fetchCart());

    dispatch(fetchOrder());

    dispatch(fetchWish());

    if (search.length !== 0) {

      let params = {

        q: search


      };

      dispatch(getProductsData(params))





    }

  }, [dispatch, products?.length, search, setSearch ])











  return (
    <>






      <div className="Nav1">


        <div className="NavleftM">

          <div >
            <Link to="/">
              <img
                src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg"
                alt="bewakoof-logo" style={{ width: "100%" }}
              />
            </Link>
          </div>

          <div>

            {
              auth ? <Link className="no" style={{textDecoration:"none" ,fontSize:"80%"  }} to="/orders">
                <Badge color="success" badgeContent={orders.length} overlap="circular">
                  myOrders
                </Badge>
              </Link> :
                <Link className="no" style={{textDecoration:"none",fontSize:"80%" }} to="/orders">myOrders</Link>

            }





          </div>





        </div>

        <div className="NavrightM">
          <div className="mbRightM">

            <div>

              <Link className="no1" style={{ textDecoration: "none" }} to="/login">
                <p style={{ margin: "5%" }} > Login</p>
              </Link>
            </div>


            <div>
              <Link className="no1" to="/wishlist">
                {
                  auth ? <Badge color="success" badgeContent={wish.length} overlap="circular">
                    <FavoriteIcon className="icon-navbar" fontSize="medium" />
                  </Badge> :
                    <FavoriteIcon className="icon-navbar" fontSize="medium" />
                }


              </Link>
            </div>
            <div>
              <Link className="no1" to="/cart">
                {
                  auth ? <Badge color="success" badgeContent={cart.length} overlap="circular">
                       <ShoppingBagIcon className="icon-navbar" fontSize="medium" />
                  </Badge>
                  :
                  <ShoppingBagIcon className="icon-navbar" fontSize="medium" />
                }
             
              </Link>
            </div>
          </div>
        </div>
      </div>



































      <div className="Nav">
        <ul className="Navleft">
          <div>
            <li>
              <div className="Mobilelogo">
                <Link to="/">
                  <img
                    src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg"
                    alt="bewakoof-logo" style={{ width: "80%" }}
                  />
                </Link>
              </div>
              <div className="Complogo" >
                <Link to="/">
                  <img
                    src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
                    alt="bewakoof-logo" style={{ width: "80%" }}
                  />
                </Link>
              </div>
            </li>

          </div>


          <li
            onMouseEnter={() => setMenHovering(true)}
            onMouseLeave={() => setMenHovering(false)}

            className="NavleftM"
          >
            <Link className="no" style={{textDecoration:"none" }} to="/men">
              {" "}
              MEN
            </Link>

            {menHovering && <DropdownMen />}
          </li>

          <li
            onMouseEnter={() => setWomenHovering(true)}
            onMouseLeave={() => setWomenHovering(false)}
          >
            <Link className="no" style={{textDecoration:"none" }} to="/women">
              WOMEN
            </Link>
            {womenHovering && <DropdownWomen />}
          </li>

          <li
            onMouseEnter={() => setMobileHovering(true)}
            onMouseLeave={() => setMobileHovering(false)}
          >
            <Link className="no" style={{textDecoration:"none" }} to="/assesories">
              ACCESSORIES
            </Link>
            {mobileHovering && <DropdownMobile />}
          </li>

          {

            auth ? <Badge color="success" badgeContent={orders.length} overlap="circular">

              <li>


                <Link className="no" style={{textDecoration:"none" }}  to="/orders">

                  myOrders


                </Link>



              </li>

            </Badge> :


              <li>


                <Link className="no" style={{textDecoration:"none" }}  to="/orders">

                  myOrders


                </Link>



              </li>






          }



        </ul>

        <div className="Navright">
          {/* <Link to={"./"}>offers</Link> */}
          <div className="alignself">
            <span className="icon">
              <SearchIcon />
            </span>


            <input
              className="searchbox"
              type="text"
              placeholder="search by product or category 🧐"

              onChange={(e) => setSearch(e.target.value)}
            />


            {
              search ? <div className="searchbox1"  >
                {
                  products.map((e) => {
                    return <>


                      <div>

                        <Link style={{ textDecoration: "none" }} to={`/products/${e.id}`} onClick={() => setSearch("")}   >  {e.name} </Link>



                      </div>



                    </>
                  })
                }
              </div> : ""
            }



          </div>
          <div className="mbRight">
            <div>

              <Link className="no1" style={{ textDecoration: "none" }} to="/login">
                <p style={{ margin: "0px" }} > Login</p>
              </Link>
            </div>


            <div>

              <Link className="no1" to="/wishlist">

                {

                  auth ? <Badge color="success" badgeContent={wish.length} overlap="circular">

                    <FavoriteIcon className="icon-navbar" fontSize="large" />
                  </Badge> :
                    <FavoriteIcon className="icon-navbar" fontSize="large" />

                }


              </Link>
            </div>





            <div>
              <Link className="no1" to="/cart">

                {
                  auth ?
                    <Badge color="success" badgeContent={cart.length} overlap="circular">

                      <ShoppingBagIcon className="icon-navbar" fontSize="large" />

                    </Badge> :
                    <ShoppingBagIcon className="icon-navbar" fontSize="large" />

                }



              </Link>
            </div>






          </div>
        </div>
      </div>
    </>
  );
};
