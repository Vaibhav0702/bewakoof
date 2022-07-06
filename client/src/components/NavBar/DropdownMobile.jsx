import "./Dropdown.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const DropdownMobile = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div
        className={dropdown ? "navcontainer clicked" : "navcontainer"}
        onClick={() => setDropdown(!dropdown)}
      >
        <div className="main-div">
          <div className="first-column">
            <div className="div" >Xiomi</div>
            <ul className="Mobile-submenu">
              <Link to="/Home/mobilecovers" className="submenu-item">
                <li onClick={() => setDropdown(false)}>Redmi 9 power</li>
              </Link>

              <Link to="/Home/mobilecovers" className="submenu-item">
                <li>Xiomi Mi 10i</li>
              </Link>
              <Link to="/Home/mobilecovers" className="submenu-item">
                <li>Xiomi Mi 10i 5G</li>
              </Link>
            </ul>
          </div>
          <div className="second-column">
            <div className="div">OnePlus</div>
            <ul>
              <Link to="/Home/mobilecovers" className="submenu-item">
                <li>OnePlus 9R</li>
              </Link>
              <Link to="/Home/mobilecovers" className="submenu-item">
                <li>OnePlus 9</li>
              </Link>
              <Link to="/Home/mobilecovers" className="submenu-item">
                <li>OnePlus 8 Pro</li>
              </Link>
            </ul>
          </div>
          <div className="Third-column">
            <div className="div">Apple</div>
            <ul>
              <Link to="/Home/mobilecovers" className="submenu-item">
                <li>iPhone 13 Pro Max</li>
              </Link>
              <Link to="/Home/mobilecovers" className="submenu-item">
                <li>iPhone 13 Pro</li>
              </Link>
              <Link to="/Home/mobilecovers" className="submenu-item">
                <li>iPhone 13</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="main-div">
          <div className="first-column">
            <div className="div">Samsung</div>
            <ul>
              <Link to="/Home/mobilecovers" className="submenu-item">
                {" "}
                <li>Samsung Galaxy Note 10 lite</li>
              </Link>
              <Link to="/Home/mobilecovers" className="submenu-item">
                {" "}
                <li>Samsung Galaxy F62</li>
              </Link>
              <Link to="/Home/mobilecovers" className="submenu-item">
                {" "}
                <li>Samsung Galaxy F41</li>
              </Link>
            </ul>
          </div>
          <div className="second-column">
            <div className="div">Realme</div>
            <ul>
              <Link to="/Home/mobilecovers" className="submenu-item">
                {" "}
                <li>Realme 5 Pro</li>
              </Link>
              <Link to="/Home/mobilecovers" className="submenu-item">
                {" "}
                <li>Realme 5</li>
              </Link>
              <Link to="/Home/mobilecovers" className="submenu-item">
                {" "}
                <li>Realme 7</li>
              </Link>
            </ul>
          </div>
          <div className="Third-column">
            <div className="div">Vivo</div>
            <ul>
              <Link to="/Home/mobilecovers" className="submenu-item">
                {" "}
                <li>Vivo S1</li>
              </Link>
              <Link to="/Home/mobilecovers" className="submenu-item">
                {" "}
                <li>Vivo Y73</li>
              </Link>
              <Link to="/Home/mobilecovers" className="submenu-item">
                {" "}
                <li>Vivo V11 Pro</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
