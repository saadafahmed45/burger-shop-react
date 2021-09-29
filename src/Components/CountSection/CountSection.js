import React from 'react';
import './CountSection.css'
import CountUp from "react-countup";

const CountSection = () => {
    return (
     <section className="count__section" id="count">
         <div className="container">
             <div className="count__header">
                 <h1>Statistics</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
             </div>
             <div className="row">
                 <div className="col-md-4">
                     <div className="count__rount">
                         <div className="count">
                         {/* <CountUp end={"100k"}   duration={3} /> */}
                         <span> 7k</span>

                             <h3>customer</h3>
                         </div>
                     </div>
                 </div>
                 <div className="col-md-4">
                     <div className="count__rount">
                         <div className="count">
                         <CountUp end={109}   duration={5} />

                             <h3>Outlets</h3>
                         </div>
                     </div>
                 </div>
                 <div className="col-md-4">
                     <div className="count__rount">
                         <div className="count">
                         <CountUp end={45}   duration={5} />

                             <h3>Country</h3>
                         </div>
                     </div>
                 </div>
             </div>
             </div>  

     </section>
    );
};

export default CountSection;