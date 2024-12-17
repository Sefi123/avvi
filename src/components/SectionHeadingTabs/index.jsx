import React, { useState } from "react";
import { Flex } from "antd";
import "./headingTab.css";

const HeadingTabs = (props) => {
  console.log(props);

  let { title } = props;
  return (
    <div className="heading-tab-container">
      <p className="heading-text">{title}</p>
    </div>
  );
};

export default HeadingTabs;
