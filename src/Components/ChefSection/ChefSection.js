import React from 'react';
import './ChefSection.css'
import c1 from '../Images/cf1.png'
import c2 from '../Images/cf2.png'
import c3 from '../Images/cf3.png'

const ChefSection = () => {
    return (
      <section className="chef__section">
<div className="container">
    <div className="chef__header">
        <h1>Our Chef</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
    </div>

    <div className="chef__img__box">
<div className="row">
    <div className="col-md-4">
<div className="chef_content">
    <img src={c1} alt="" />
    <h3>Saadaf Ahmed</h3>
    <h5>CEO of burger shop</h5>
</div>
    </div>

    <div className="col-md-4">
<div className="chef_content">
    <img src={c2} alt="" />
    <h3>Saadaf Ahmed</h3>
    <h5>CEO of burger shop</h5>
</div>
    </div>
    <div className="col-md-4">
<div className="chef_content">
    <img src={c3} alt="" />
    <h3>Saadaf Ahmed</h3>
    <h5>CEO of burger shop</h5>
</div>
    </div>

</div>
    </div>
</div>
      </section>
    );
};

export default ChefSection;