import { Flex, Button } from "antd";
import "./homePageBanner.css";
import HeadingTabs from "../SectionHeadingTabs";

const HomePageBanner = () => {
  return (
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
  );
};

export default HomePageBanner;
