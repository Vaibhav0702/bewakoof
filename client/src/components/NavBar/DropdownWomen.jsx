import "./Dropdown.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const DropdownWomen = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div
        className={dropdown ? "navcontainer clicked" : "navcontainer"}
        onClick={() => setDropdown(!dropdown)}
      >
        <div className="main-div">
          <div className="first-column">
            <div className="div">Topwear</div>
            <ul className="Mobile-submenu">
              <Link to="/Home/women" className="submenu-item">
                <li onClick={() => setDropdown(false)}>Printed T-Shirts</li>
              </Link>

              <Link to="/Home/women" className="submenu-item">
                <li>Oversized T-Shirts</li>
              </Link>
              <Link to="/Home/women" className="submenu-item">
                <li>Plain T-Shirts</li>
              </Link>
            </ul>
          </div>
          <div className="second-column">
            <div className="div">Bottomwear</div>
            <ul>
              <Link to="/Home/women" className="submenu-item">
                <li>Joggers</li>
              </Link>
              <Link to="/Home/women" className="submenu-item">
                <li>Pajamas</li>
              </Link>
              <Link to="/Home/women" className="submenu-item">
                <li>Shorts</li>
              </Link>
            </ul>
          </div>
          <div className="Third-column">
            <div className="div">Footwear</div>
            <ul>
              <Link to="/Home/women" className="submenu-item">
                <li>Sliders</li>
              </Link>
              <Link to="/Home/women" className="submenu-item">
                <li>Flip-Flops</li>
              </Link>
              <Link to="/Home/women" className="submenu-item">
                <li>Slippers</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="main-div">
          <div className="first-column">
            <div className="div">Accesories</div>
            <ul>
              <Link to="/Home/women" className="submenu-item">
                {" "}
                <li>Mobile Covers</li>
              </Link>
              <Link to="/Home/women" className="submenu-item">
                {" "}
                <li>Bags & Backpacks</li>
              </Link>
              <Link to="/Home/women" className="submenu-item">
                {" "}
                <li>Socks</li>
              </Link>
            </ul>
          </div>
          <div className="second-column">
            <div className="div">Winterwear</div>
            <ul>
              <Link to="/Home/women" className="submenu-item">
                {" "}
                <li>Sweatshirt & Hoodie</li>
              </Link>
              <Link to="/Home/women" className="submenu-item">
                {" "}
                <li>Jackets</li>
              </Link>
              <Link to="/Home/women" className="submenu-item">
                {" "}
                <li>Sweaters</li>
              </Link>
            </ul>
          </div>
          <div className="Third-column">
            <div className="div">Loungewear</div>
            <ul>
              <Link to="/Home/women" className="submenu-item">
                {" "}
                <li>Vests</li>
              </Link>
              <Link to="/Home/women" className="submenu-item">
                {" "}
                <li>Pajamas</li>
              </Link>
              <Link to="/Home/women" className="submenu-item">
                {" "}
                <li>Boxers</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
