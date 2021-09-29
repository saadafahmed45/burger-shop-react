import React from "react";
import "./PackegeSec.css";
import packageIcon from "../Images/burgerIcon.png";

const PackegeSec = () => {
  const packageItem = [
    {
      item: "Package I",
      price: 10,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,",
    },
    {
      item: "Package II",
      price: 20,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,!",
    },
    {
      item: "Package III",
      price: 30,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,!",
    },
  ];

  return (
    <section className="packege__section">
      <div className="container">
        <div className="packege__header">
          <h1>Popular Package</h1>
        </div>
        <div className="row mt-5">
          {packageItem.map((pk) => (
            <div className="col-md-4">
              <div className="package__box ">
                <h3>{pk.item}</h3>
                <div className="p_icon">
                  <img src={packageIcon} alt="" />
                </div>
                <h4>${pk.price}</h4>
                <p>
                 {pk.content}
                </p>
                <div className="order__btn">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackegeSec;
