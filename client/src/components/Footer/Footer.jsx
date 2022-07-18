import "./Footer.css";
import React from "react";

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import AppleIcon from '@mui/icons-material/Apple';

import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <>
      <footer>
    
        <div className="footerContainer">

      
          <div className="row">
         
            <div className="col">
            <div  style={{ paddingLeft:"10%"     }}    >  <h1 style={{color:"yellow"  , margin:"0px"}} >Bewakoof</h1></div>

              <div className="row1">

                <div className="col1">

                  
                  <h2>CUSTOMER SERVICE</h2>
                  <ul>
                    <li>
                      <a href="a">Contact Us</a>
                    </li>
                    <li>
                      <a href="a">Track Order</a>
                    </li>
                    <li>
                      <a href="a">Return Order</a>
                    </li>
                    <li>
                      <a href="a">Cancel Order</a>
                    </li>
                  </ul>
                </div>

                <div className="col1"   >
                  <h2>COMPANY</h2>
                  <ul>
                    <li>
                      <a href="a">About Us</a>
                    </li>
                    <li>
                      <a href="a">We're Hiring</a>
                    </li>
                    <li>
                      <a href="a">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="a">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="a">Blog</a>
                    </li>
                  </ul>
                </div>

                <div className="col1" id="Rowcol3"  >
                  <h2>CONNECT WITH US</h2>
                  <ul>
                    <li>

                      <a href="https://www.facebook.com/bewakoofcom" target="_blank" style={{ display: "flex" }}>
                        <FacebookIcon style={{ color: "white", width: "20px", height: "20px", marginRight: "10px", marginTop: "15px" }} />
                        <p>4.7M People Like this</p> </a>
                    </li>
                    <li>

                      <a href="https://www.instagram.com/bewakoofofficial/" target="_blank" style={{ display: "flex" }}>
                        <InstagramIcon style={{ color: "white", width: "20px", height: "20px", marginRight: "10px", marginTop: "15px" }} />
                        <p> 1M Followers</p> </a>
                    </li>
                   
                    <a href="https://twitter.com/bewakoof"   target="_blank"     >  <TwitterIcon style={{ color: "white" }} /> </a>
                    <a href="https://apps.apple.com/in/app/bewakoof/id1100190514"  target="_blank"  >  <AppleIcon style={{ color: "white" }} /> </a>
                  
                    <a       href="a" >  <YouTubeIcon style={{ color: "white" }} /> </a>


                  </ul>
                </div>

                <div className="col1" id="Rowcol4">
                  <h2>KEEP UP TO DATE</h2>
                  <input
                    className="email"
                    placeholder="Enter Email Id"
                    type="Email"
                  />
                  <button className="subscribe">SUBSCRIBE</button>
                </div>

              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row2">
          <div className="col2">
            <ul>
              <li>
                <a href="a">15 Days return policy*</a>
                <li>
                  <a href="a">Cash on delivery*</a>
                </li>
              </li>
            </ul>
          </div>
          <div className="abc">
            <ul>
              <li style={{ color: "yellow" }} >DOWNLOAD THE APP</li>
            </ul>
          </div>

          <div className="abcd">
            <ul>
              <li style={{ color: "yellow" }} >100% SECURE PAYMENT</li>
            </ul>
            <img
              style={{ margin: "0 0 0 40px" }} src="https://images.bewakoof.com/web/secure-payments-image.png"
              alt=""
            />

          </div>
          <div className="empty1"></div>
        </div>
        <hr />
        <div className="hrbelow">
          <div className="hrbelow1">
            <p className="footer-p">MEN'S CLOTHING</p>
            <ul>
              <li>
                <a href="a">Top Wear</a>
              </li>
              <li>
                <a href="a">Top Wear</a>
              </li>
              <li>
                <a href="a">Men's New Arrivals</a>
              </li>
              <li>
                <a href="a">Men's Half Sleeve T-Shirts</a>
              </li>
              <li>
                <a href="a">Men's Vests</a>
              </li>
              <li>
                <a href="a">Men's Printed T-shirts</a>
              </li>
              <li>
                <a href="a">Men's Plain T-shirts</a>
              </li>
              <li>
                <a href="a">Men's Polo T-Shirts</a>
              </li>
              <li>
                <a href="a">Men's Kurtas</a>
              </li>
              <li>
                <a href="a">Men's Combo T-Shirts</a>
              </li>
              <li>
                <a href="a">Men's Shirts</a>
              </li>
              <li>
                <a href="a">Men's Nightwear</a>
              </li>
              <li>
                <a href="a">Men's Plus Size Store</a>
              </li>
              <li>
                <a href="a">Bottom Wear</a>
              </li>
              <li>
                <a href="a">Men's Pajamas</a>
              </li>
              <li>
                <a href="a">Men's Boxer Shorts</a>
              </li>
              <li>
                <a href="a">Men's Shorts</a>
              </li>
           
            </ul>
          </div>
          <div className="hrbelow2">
            <p className="footer-p">WOMEN'S CLOTHING</p>
            <ul>
              <li>
                <a href="a">Women's Top Wear</a>
              </li>
              <li>
                <a href="a">Women's New Arrivals</a>
              </li>
              <li>
                <a href="a">Women's T-Shirts</a>
              </li>
              <li>
                <a href="a">Women's Hoodies & Sweatshirts</a>
              </li>
              <li>
                <a href="a">Women's Dresses</a>
              </li>
              <li>
                <a href="a">Women's 3/4 Sleeve T-Shirts</a>
              </li>
              <li>
                <a href="a">Women's Kurtis</a>
              </li>
    
      
              <li>
                <a href="a">Women's Jeans</a>
              </li>
              <li>
                <a href="a">Women's Joggers</a>
              </li>
              <li>
                <a href="a">Women's Shorts</a>
              </li>
              <li>
                <a href="a">BAGS</a>
              </li>
              <li>
                <a href="a">Laptop Bags</a>
              </li>
              <li>
                <a href="a">Small Backpacks</a>
              </li>
              <li>
                <a href="a">Featured</a>
              </li>
              <li>
                <a href="a">Women's Slides</a>
              </li>
              <li>
                <a href="a">Women's Flip Flops</a>
              </li>
            </ul>
          </div>
          <div className="hrbelow3">

            <p className="footer-p">CUSTOMER SERVICE</p>

            <ul>
              <li>
                <a href="a">Brands</a>
              </li>
              <li>
                <a href="a">Apple</a>
              </li>
              <li>
                <a href="a">Realme</a>
              </li>
              <li>
                <a href="a">Samsung</a>
              </li>
              <li>
                <a href="a">Xiaomi</a>
              </li>
              <li>
                <a href="a">Oneplus</a>
              </li>
              <li>
                <a href="a">Vivo</a>
              </li>
              <li>
                <a href="a">Oppo</a>
              </li>
            </ul>
          </div>

          <div className="rightText"  style={{color:"cyan"}} >

             <h3>FANBOOK</h3>
             <h3>OFFERS</h3>
             <h3>SITEMAP</h3>

          </div>
        </div>

      </footer>
    </>
  );
};
