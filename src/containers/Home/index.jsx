import React from "react";
import Header from "../../components/Header";
import "./home.css";
import ITStaffSection from "../../components/ITStaffSection";
import HomePageBanner from "../../components/HomePageBanner";
import AboutUs from "../../components/AboutUs";
import Services from "../../components/Services";

const Home = () => {
  return (
    <>
      {/* <div>Hello this is home page!</div> */}
      <div className="main-container-landing-page">
        <div className="home-banner-check">
          <div className="home-container">
            <Header />
            <HomePageBanner />
          </div>
        </div>
        <div className="landing-page-sections">
          <ITStaffSection />
          <AboutUs />
          <Services />
        </div>
      </div>
    </>
  );
};

export default Home;
