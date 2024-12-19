import React from "react";
import "./caseStudy.css";
import caseStudyImage from "../../assets/Images/Frame 1948757271.png";
import cyprusLogo from "../../assets/Images/cyprus.png";
import blockChainLogo from "../../assets/Images/Frame 1948757176 (1).png";
import fileShieldLogo from "../../assets/Images/file-shield-02.png";
const responsibilitiesData = [
  { icon: blockChainLogo, title: "Block Chain Development" },
  { icon: blockChainLogo, title: "Smart Contract Development" },
//   { icon: blockChainLogo, title: "UX/UI Design" },
//   { icon: blockChainLogo, title: "Front and Backend Development " },
];
const CaseStudy = (responsibilities = []) => {
  return (
    <>
      <div className="case-study-section">
        <div className="case-study-container">
          <div className="case-study-main-heading-wrapper">
            <p className="case-study-sub-heading">Case Studies</p>
            <h1>Proven success across industries</h1>
            <p className="case-study-text-primary">
              Discover how we’ve helped businesses achieve their goals through
              innovative digital solutions
            </p>
          </div>
          <div className="case-study-row">
            <div className="case-study-col-6">
              <div className="case-study-image-wrapper">
                <img src={caseStudyImage} alt="" />
              </div>
            </div>
            <div className="case-study-col-6">
              <div className="case-study-right-top">
                <div className="case-study-right-top-header">
                  <p className="case-study-right-top-headings">
                    Succes Stories
                  </p>
                  <div className="case-study-right-top-headings">
                    <img src={cyprusLogo} alt="" />
                    <p>cyprus</p>
                  </div>
                </div>
                <h3 className="case-study-text-primary text-black">
                  Blockchain FinTech Company that integrates cryptocurrency
                  payments and management for businesses and individuals
                </h3>
                <p className="case-study-text-secondary">
                  The platform’s seamless functionality empowers businesses to
                  accept cryptocurrency payments for products and services,
                  making it ideal for industries like luxury retail, private
                  aviation, and automotive sales.
                </p>
              </div>
              <div className="case-study-right-mid">
                <p className="case-study-text-secondary text-black">
                  We handled:
                </p>

                <div className="case-study-responsibilities">
                  {responsibilitiesData.map((item, index) => (
                    <div
                      className="case-study-responsibility-wrapper case-study-details"
                      key={index}
                    >
                      <img src={item.icon} alt={item.title} />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="case-study-right-bottom">
                <div className="case-study-right-bottom-container">
                  <div className="case-study-right-bottom-wrapper">
                    <div className="case-study-right-bottom-image">
                      <img src={fileShieldLogo} alt="" />
                    </div>
                    <div className="case-study-right-bottom-text">
                      <p className="case-study-text-secondary text-black">
                        Project is covered under an NDA
                      </p>
                      <p>
                        To learn more about this case, please contact us
                        directly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
