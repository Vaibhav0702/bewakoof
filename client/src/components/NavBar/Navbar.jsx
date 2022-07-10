import "./Navbar.css";
import { Link } from "react-router-dom";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { DropdownMobile } from "./DropdownMobile";
import { DropdownMen } from "./DropdownMen";
import { DropdownWomen } from "./DropdownWomen";



export const Navbar = () => {

  const [menHovering, setMenHovering] = useState(false);

  const [mobileHovering, setMobileHovering] = useState(false);

  const [womenHovering, setWomenHovering] = useState(false);



  
  return (
    <>






      <div className="Nav1">


        <div className="NavleftM">

          <div >
            <Link to="/">
              <img
                src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg"
                alt="bewakoof-logo" style={{ width: "50px" }}
              />
            </Link>
          </div>


        </div>

        <div className="NavrightM">
          <div className="mbRightM">
            <div>

              <Link className="no1" style={{ textDecoration: "none" }} to="/login">
                <p style={{ margin: "3px" }} > Login</p>
              </Link>
            </div>

            <div>
              <Link className="no1" to="/wishlist">
                <FavoriteIcon className="icon-navbar" fontSize="large" />
              </Link>
            </div>
            <div>
              <Link className="no1" to="/cart">
                <ShoppingBagIcon className="icon-navbar" fontSize="large" />
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
            <Link className="no" to="/men">
              {" "}
              MEN
            </Link>

            {menHovering && <DropdownMen />}
          </li>

          <li
            onMouseEnter={() => setWomenHovering(true)}
            onMouseLeave={() => setWomenHovering(false)}
          >
            <Link className="no" to="/women">
              WOMEN
            </Link>
            {womenHovering && <DropdownWomen />}
          </li>

          <li
            onMouseEnter={() => setMobileHovering(true)}
            onMouseLeave={() => setMobileHovering(false)}
          >
            <Link className="no" to="/assesories">
              ACCESSORIES
            </Link>
            {mobileHovering && <DropdownMobile />}
          </li>
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
              placeholder="search by product, category or collection 🧐"
            />
          </div>
          <div className="mbRight">
            <div>

              <Link className="no1" style={{ textDecoration: "none" }} to="/login">
                <p style={{ margin: "0px" }} > Login</p>
              </Link>
            </div>

            <div>
              <Link className="no1" to="/wishlist">
                <FavoriteIcon className="icon-navbar" fontSize="large" />
              </Link>
            </div>
            <div>
              <Link className="no1" to="/cart">
                <ShoppingBagIcon className="icon-navbar" fontSize="large" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
