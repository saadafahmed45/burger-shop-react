import React from "react";
import BestBurger from "../BestBurger/BestBurger";
import BigBurger from "../BigBurger/BigBurger";
import ChefSection from "../ChefSection/ChefSection";
import CountSection from "../CountSection/CountSection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PackegeSec from "../PackegeSec/PackegeSec";
import Review from "../Review/Review";
import SubscribeSec from "../SubscribeSec/SubscribeSec";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <ChefSection></ChefSection>
      <BestBurger></BestBurger>
      <BigBurger></BigBurger>
      <CountSection></CountSection>
      <PackegeSec></PackegeSec>
      <Review></Review>
   <SubscribeSec></SubscribeSec>
   <Footer></Footer>

    </div>
  );
};

export default Home;
