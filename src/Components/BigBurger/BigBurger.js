import React from 'react';
import './BigBurger.css'
import bigBurger from '../Images/best_burger2.png'
const BigBurger = () => {
    return (
      <section className="big__burger__Section">
          <div className="container">
              
              <div className="row">
                  <div className="col-md-6">
                  <div className="burger__content big_burger">
              <h1>Best Burger</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.{" "}
              </p>
              <div className="order__btn ">
                <a href="#"> Order Now</a>
              </div>
            </div>
                  </div>
                  <div className="col-md-6">
                  <div className="best_burger_img bestImgSec">
        <img src={bigBurger} alt="" />
    </div>
                  </div>
              </div>
              </div> 

      </section>
    );
};

export default BigBurger;