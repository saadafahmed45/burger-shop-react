import React from "react";
import "./Header.css";
import BtnavBar from "../BtnavBar/BtnavBar";

const Header = () => {
  return (
    <div>
      <header className="header__section">
        <BtnavBar />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="header__content">
                <h1>
                  Get Cashback <br /> up to 50%
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse consectetur justo eu nunc consequat.
                </p>
                <div className="order__btn">
                  <a href="#">Order Now</a>
                </div>
              </div>
              .
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
