import React, { useState } from "react";
import { Flex, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./header.css";
import HeaderLogo from "../../assets/Images/HeaderLogo.svg";

const Header = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Flex
        align={"center"}
        justify={"space-between"}
        className="header-container web-options"
      >
        <div className="header-logo" onClick={() => navigate("/")}>
          <img src={HeaderLogo} alt="Avvi" />
          <p>AVVI</p>
        </div>
        <Flex gap={"4.5rem"} className="header-list-container web-options">
          <Flex
            align={"center"}
            justify={"center"}
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Our Services
          </Flex>
          <Flex
            align={"center"}
            justify={"center"}
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            About Us
          </Flex>
          <Flex
            align={"center"}
            justify={"center"}
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Industries
          </Flex>
          <Flex
            align={"center"}
            justify={"center"}
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Stack
          </Flex>
        </Flex>
        <Flex gap={8} className="web-options">
          <Button type={"primary"} className="header-button">
            Speak to us
          </Button>
        </Flex>
      </Flex>
      <Flex vertical className="mobileMenu ">
        <Flex>
          <div className="mob-header" onClick={() => navigate("/")}>
            <div className="header-logo">
              <img src={HeaderLogo} alt="Avvi" />
              <p>AVVI</p>
            </div>
            <div
              className="menu-icon"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              {openMenu ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </div>
          </div>
        </Flex>

        {openMenu && (
          <Flex className="mobileMenuOptions">
            <Flex
              align={"center"}
              justify={"center"}
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Our Services
            </Flex>
            <Flex
              align={"center"}
              justify={"center"}
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              About Us
            </Flex>
            <Flex
              align={"center"}
              justify={"center"}
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Industries
            </Flex>
            <Flex
              align={"center"}
              justify={"center"}
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Stack
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Header;
