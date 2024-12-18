import { Flex, Row } from "antd";
import "./services.css";
import UiDesignBg from "../../assets/Images/UiDesignBg.png";
import AiBg from "../../assets/Images/AiBg.png";
import SoftwareBg from "../../assets/Images/SoftwareBg.png";
import BlockchainBg from "../../assets/Images/BlockchainBg.png";

import HeadingTabs from "../SectionHeadingTabs";

const Services = () => {
  return (
    <div className="services-main-container">
      <div className="services-header">
        <HeadingTabs title={"Our Services"} />
        <div className="services-heading">
          <p>
            With innovation and expertise,
            <br /> we bring big ideas to life
          </p>
        </div>
      </div>
      <div className="services-content">
        <div className="services-content-box1 services-content-box1-bg1">
          {/* <img src={UiDesignBg} alt="" height={380} /> */}
          <p>UX/UI design</p>
        </div>
        <div className="services-content-box1 services-content-box1-bg2">
          {/* <img src={UiDesignBg} alt="" height={380} /> */}
          <p>UX/UI design</p>
        </div>
        <div className="services-content-box1 services-content-box1-bg3">
          {/* <img src={UiDesignBg} alt="" height={380} /> */}
          <p>UX/UI design</p>
        </div>
        <div className="services-content-box1 services-content-box1-bg4">
          {/* <img src={UiDesignBg} alt="" height={380} /> */}
          <p>UX/UI design</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
