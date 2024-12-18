import { Button, Flex } from "antd";
import HeadingTabs from "../SectionHeadingTabs";
import AboutUsIcon from "../../assets/Images/AboutUsIcon.svg";
import AboutUsPersonImage from "../../assets/Images/AboutUsPersonImage.png";
import UserImage1 from "../../assets/Images/UserImage1.png";
import UserImage2 from "../../assets/Images/UserImage2.png";
import UserImage3 from "../../assets/Images/UserImage3.png";
import UserImage4 from "../../assets/Images/UserImage4.png";
import CyprusIcon from "../../assets/Images/CyprusIcon.svg";
import UkraineIcon from "../../assets/Images/UkraineIcon.svg";
import PolandIcon from "../../assets/Images/PolandIcon.svg";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-header">
        <HeadingTabs title={"About Us"} />
        <p className="aboutUs-subheading">Where Vision Meets Innovation</p>
      </div>
      <div className="aboutUs-container-box">
        <div className="aboutUs-container-subbox1">
          <div className="aboutUs-subcontainer1">
            <div className="aboutUs-subcontainer1-content">
              <div className="aboutUs-subcontainer1-icon">
                <img src={AboutUsIcon} alt="" />
              </div>
              <div className="aboutUs-subcontainer1-text">
                <p>
                  Our mission is to help businesses grow by delivering
                  innovative and scalable products to their needs.
                </p>
              </div>
            </div>

            <div>
              <Button className="aboutUs-subcontainer-button">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="aboutUs-subcontainer2">
            <div className="aboutUs-subcontainer2-subBox1">
              <div className="aboutUs-subcontainer2-subBox1-content">
                <p className="aboutUs-subcontainer2-subBox1-heading">
                  CEO of AVVI
                </p>
                <p className="aboutUs-subcontainer2-subBox1-subheading">
                  Steven Maindl
                </p>
              </div>
            </div>
            <div className="aboutUs-subcontainer2-subBox2">
              <div className="aboutUs-subcontainer2-subBox1-content">
                <p className="aboutUs-subcontainer2-subBox2-heading">
                  What we've achieved
                </p>
                <p className="aboutUs-subcontainer2-subBox2-subheading">
                  Since 2022:
                </p>
              </div>
              <div className="aboutUs-subcontainer2-subBox2-content">
                <div className="aboutUs-subcontainer2-subBox2-a">
                  <p className="a-text">3+</p>
                  <p className="a-subtext">Years of expertise</p>
                </div>
                <div className="aboutUs-subcontainer2-subBox2-a">
                  <p className="a-text">30+</p>
                  <p className="a-subtext">Client success stories</p>
                </div>
              </div>
              <div className="aboutUs-subcontainer2-subBox2-content2">
                <div className="user-icon-section">
                  <img src={UserImage1} alt="" />
                  <img src={UserImage2} alt="" />
                  <img src={UserImage3} alt="" />
                  <img src={UserImage4} alt="" />
                </div>
                <div className="user-icon-section-subtext">
                  <p className="user-section-text">
                    20+ Experienced professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutUs-container-subbox3">
          <div className="aboutUs-container-subbox3-box">
            <div className="subbox3-box-a">
              <div className="box-a-heading">
                <img src={CyprusIcon} alt="" />
                <p>Cyprus</p>
              </div>
              <div className="box-a-text">
                <p>Faneromenis Avenue 85, Office 301, Larnaca, Cyprus</p>
              </div>
            </div>
            <div className="subbox3-box-a">
              <div className="box-a-heading">
                <img src={UkraineIcon} alt="" />
                <p>Ukraine </p>
              </div>
              <div className="box-a-text">
                <p>Belvederska 23, Ivano-Frankivsk, 76000 Ukraine</p>
              </div>
            </div>
            <div className="subbox3-box-a">
              <div className="box-a-heading">
                <img src={PolandIcon} alt="" />
                <p>Poland</p>
              </div>
              <div className="box-a-text">
                <p>Zamknieta 10, 1.5, 30-334, Krakow, Poland</p>
              </div>
            </div>
            <div className="subbox3-box-a">
              <p className="our-office-text">Our Offices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
