import React from "react";
import "./BestBurger.css";
import bestBurger from "../Images/best_burger.png";
const BestBurger = () => {
  return (
    <section className="best__burger__section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="best_burger_img">
              <img src={bestBurger} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="burger__content bigcontent">
              <h1>Best Burger</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.{" "}
              </p>
              <div className="order__btn__sec  ">
                <a href="#"> Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestBurger;
