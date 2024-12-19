import React from "react";
import Header from "../../components/Header";
import HeadingTabs from "../../components/SectionHeadingTabs";
import { Row, Col, Button, Flex } from "antd";

import "./home.css";
import ITStaffSection from "../../components/ITStaffSection";
import TechnologyStack from "../../components/Technology-section";
import Industries from "../../components/industries-section";
import CaseStudy from "../../components/caseStudy";

const Home = () => {
  return (
    <>
      {/* <div>Hello this is home page!</div> */}
      <div className="home-container">
        <Header />
        <Flex className="section-1-container">
          {/* <img src={HomeBg} /> */}
          <HeadingTabs title={"Get it done with AVVI"}></HeadingTabs>
          <div className="section-1">
            <div className="section-1-content">
              <p className="content-text heading">
                Creating Software Innovation Together
              </p>
              <p className="content-subtext text-gray">
                AVVI seamlessly integrates with your business. From planning to
                maintenance offering flexible services that can be utilized
                individually or combined to meet your needs across the entire
                software development lifecycle.
              </p>
            </div>
            <div className="section-1-button">
              <Button className="section-1-btn">Talk to an Expert</Button>
            </div>
          </div>
        </Flex>
      </div>
      <ITStaffSection />
      <TechnologyStack/>
      <Industries/>
      <CaseStudy/>
      
    </>
  );
};

export default Home;
