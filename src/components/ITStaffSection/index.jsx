import React from "react";
import { Col, Row, Flex } from "antd";
import HeadingTabs from "../SectionHeadingTabs";
import MaintenanceIcon from "../../assets/Images/MaintenanceIcon.svg";
import SaaSIcon from "../../assets/Images/SaaSIcon.svg";
import UIUXIcon from "../../assets/Images/UIUXIcon.svg";
import WebDevelopmentIcon from "../../assets/Images/WebDevelopmentIcon.svg";
import AIDevelopmentIcon from "../../assets/Images/AIDevelopmentIcon.svg";
import BlockchainDevelopmentIcon from "../../assets/Images/BlockchainDevelopmentIcon.svg";
import ITStaffBlock2Bg from "../../assets/Images/ITStaffBlock2Bg.png";
import ClockIcon from "../../assets/Images/ClockIcon.svg";
import "./ITstaffSection.css";

const ITStaffSection = () => {
  return (
    <Row className="section-2-container">
      <div className="section-2-subcontainer">
        <HeadingTabs title={"IT Staff Augmentation"}></HeadingTabs>
        <div className="section-2">
          <p className="section-2-heading">Let us build your dream team</p>
        </div>
      </div>
      <div className="section-2-content">
        <div className="content-row-1">
          <Row span={24} className="boxes">
            <Col span={24} lg={10} className="box1">
              <p className="box1-heading">
                We solve the whole range of problems
              </p>
              <div className="sub-boxes">
                <div className="subbox1 first-subbox">
                  <img src={MaintenanceIcon} alt="" />
                  <p>Ongoing Maintainance</p>
                </div>
                <div className="subbox2">
                  <div className="subbox1">
                    <img src={SaaSIcon} alt="" />
                    <p>SaaS</p>
                  </div>
                  <div className="subbox1 ">
                    <img src={UIUXIcon} alt="" />
                    <p>UI/UX Design</p>
                  </div>
                </div>
                <div className="subbox2">
                  <div className="subbox1">
                    <img src={WebDevelopmentIcon} alt="" />
                    <p>Web Development</p>
                  </div>
                  <div className="subbox1">
                    <img src={AIDevelopmentIcon} alt="" />
                    <p>AI Development</p>
                  </div>
                </div>
                <div className="subbox1">
                  <img src={BlockchainDevelopmentIcon} alt="" />
                  <p>BlockChain Development</p>
                </div>
              </div>
            </Col>
            <Col span={24} lg={14} className="box2">
              <div className="box2-heading">
                <p>Advantages Of Hiring Our Team</p>
              </div>
              <div className="box2-content">
                <div className="box2-content-left">
                  <div className="cost-section">
                    <p className="cost-section-heading">Cost Reduction</p>
                    <p className="cost-section-content text-gray">
                      Outsourcing eliminates the need for long-term commitments,
                      office space, equipment, and employee benefits.
                    </p>
                  </div>
                  <div className="cost-section">
                    <p className="cost-section-heading">Risk Reduction</p>
                    <p className="cost-section-content text-gray">
                      Outsourcing eliminates the need for long-term commitments,
                      office space, equipment, and employee benefits.
                    </p>
                  </div>
                </div>
                <div className="box2-content-left">
                  <div className="cost-section">
                    <p className="cost-section-heading">Cost Reduction</p>
                    <p className="cost-section-content text-gray">
                      Outsourcing eliminates the need for long-term commitments,
                      office space, equipment, and employee benefits.
                    </p>
                  </div>
                  <div className="cost-section">
                    <p className="cost-section-heading">Cost Reduction</p>
                    <p className="cost-section-content text-gray">
                      Outsourcing eliminates the need for long-term commitments,
                      office space, equipment, and employee benefits.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="content-row-1">
          <Row span={24} className="boxes">
            <Col span={24} lg={14} className="only-image-box"></Col>
            <Col span={24} lg={10} className="itstaff-box4">
              <div className="itstaff-box4-text">
                <p className="itstaff-box4-heading">Top-Tier Engineers</p>
                <p className="itstaff-box4-subtext">
                  Skip the lengthy and expensive recruitment process. Access IT
                  specialists exactly when you need them and pay only for the
                  hours worked.
                </p>
              </div>
              <div className="itstaff-box4-content-div">
                <img src={ClockIcon} />
                <p className="itstaff-box4-content-div-text">
                  Get your team up in as little as 3 weeks
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Row>
  );
};

export default ITStaffSection;
