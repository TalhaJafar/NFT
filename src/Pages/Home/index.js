import React from "react";
import Header from "../../Components/Home/Header";
import FollowSection from "../../Components/Home/FollowSection";
import About from "../../Components/Home/About";
import Roadmap from "../../Components/Home/Roadmap";
import Team from "../../Components/Home/Team";
import Faqs from "../../Components/Home/Faqs";
import JoinGang from "../../Components/Home/JoinGang";
import Footer from "../../Components/Footer";

const Index = () => {
  return (
    <React.Fragment>
      <Header />
      <FollowSection />
      <About />
      <Roadmap />
      <Team />
      <Faqs />
      <JoinGang />
      <Footer />
    </React.Fragment>
  );
};

export default Index;
