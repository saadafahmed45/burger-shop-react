import React from "react";
import "./Footer.css";
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
  <>

<footer className="footer__section">
      <div className="container">
        <div className="row">
          <div className=" col-12 col-md-6">
            <div className="footer__left">
              <h3>Title Burger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                iure maxime veniam. Molestiae, error accusamus?
              </p>
            </div>
            <div className="footer_icons">
           <i> <a href="#"><FaFacebookF /></a></i>
           <i><a href="#"> <FaInstagram /></a></i>
           <i><a href="#"> <FaTwitter /></a></i>
           <i> <a href="#"><FaWhatsapp /></a></i>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="footer__link">
                  <h5>About</h5>
                  <li>
                    <a href="#">History</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Brand Guidelines</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="footer__link">
                  <h5>Services</h5>
                  <li>
                    <a href="#"> How to Order</a>
                  </li>
                  <li>
                    <a href="#">Our Product</a>
                  </li>
                  <li>
                    <a href="#">Order Status</a>
                  </li>
                  <li>
                    <a href="#">Promo</a>
                  </li>
                  <li>
                    <a href="#">Payment Method</a>
                  </li>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="footer__link">
                  <h5>Other</h5>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
<div className="copyright__sec">
<p>Copyright © 2021 Mohammad Haolader </p>

</div>
  </>
    
  );
};

export default Footer;
