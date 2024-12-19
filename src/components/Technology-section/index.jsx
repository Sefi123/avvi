import React from 'react'
import "./technology-section.css"
import Technologies from '../technologies'
import vueLogo from "../../asset/images/image 283.png"
import reactLogo from "../../asset/images/image 284.png"
import nodeLogo from "../../asset/images/Group 1948753502.png"
import nestLogo from "../../asset/images/image 286.png"
import aspLogo from "../../asset/images/image 287.png"
import phpLogo from "../../asset/images/image 288.png"
import laravelLogo from "../../asset/images/image 289.png"
import kotlinLogo from "../../asset/images/image 290.png"
import swiftLogo from "../../asset/images/image 291.png"
import awsLogo from "../../asset/images/image 292.png"
import gcpLogo from "../../asset/images/image 293.png"
import azureLogo from "../../asset/images/image 294.png"
import herokuLogo from "../../asset/images/image 295.png"
import serverlessLogo from "../../asset/images/image 296.png"
import postgresqlLogo from "../../asset/images/image 297.png"
import mysqlLogo from "../../asset/images/image 310.png"
import mongodbLogo from "../../asset/images/image 299.png"
import snowflakeLogo from "../../asset/images/image 300.png"
import typescriptLogo from "../../asset/images/image 301.png"
import javascriptLogo from "../../asset/images/image 302.png"
import cLogo from "../../asset/images/image 303.png"
import solidityLogo from "../../asset/images/image 305.png"
import rustLogo from "../../asset/images/image.png"
import golangLogo from "../../asset/images/image 306.png"
import web3jsLogo from "../../asset/images/image 307.png"
import substrateLogo from "../../asset/images/image 308.png"










const techData = [
  {
    type: "front-end",
    data: {
      icon1: vueLogo,
      languageName1: "Vue.js",
      icon2: reactLogo,
      languageName2: "React",
    },
  },
  {
    type: "back-end",
    data: {
      icon1: nodeLogo,
      languageName1: "Node.js",
      icon2: nestLogo,
      languageName2: "Nest.js",
      icon3: aspLogo,
      languageName3: "Asp.js",
      icon4: phpLogo,
      languageName4: "Php.js",
      icon5: laravelLogo,
      languageName5: "Laravel",
      

    },
  },
  {
    type: "Mobile",
    data: {
      icon1:reactLogo,
      languageName1: "React Native",
      icon2: kotlinLogo,
      languageName2: "Kotlin",
      icon3: swiftLogo,
      languageName3: "Swift",

    },
  },
  {
    type: "Infrastructure",
    data: {
      icon1: awsLogo,
      languageName1: "AWS",
      icon2: gcpLogo,
      languageName2: "GCP",
      icon3: azureLogo,
      languageName3: "Azure",
      icon4: herokuLogo,
      languageName4: "Heroku",
      icon5: serverlessLogo,
      languageName5: "Serverless.js",
      

    },
  },
  {
    type: "Database",
    data: {
      icon1: postgresqlLogo,
      languageName1: "PostgreSQL",
      icon2: mysqlLogo,
      languageName2: "MySQL",
      icon3: mongodbLogo,
      languageName3: "MongoDB",
      icon4: herokuLogo,
      languageName4: "Heroku",
      icon5: snowflakeLogo,
      languageName5: "Snowflake",
      

    },
  },
  {
    type: "Languages",
    data: {
      icon1: typescriptLogo,
      languageName1: "Typescript",
      icon2: javascriptLogo,
      languageName2: "Javascript",
      icon3: cLogo,
      languageName3: "C#",
     
      

    },
  },
  {
    type: "Blockchain",
    data: {
      icon1: solidityLogo,
      languageName1: "Solidity",
      icon2: rustLogo,
      languageName2: "Rust",
      icon3: golangLogo,
      languageName3: "Golang",
      icon4: web3jsLogo,
      languageName4: "Web3.js",
      icon5: substrateLogo,
      languageName5: "Substrate",
      

    },
  },
];
const techDataLeft = [
  
  {
    type: "back-end",
    data: {
      icon1: nodeLogo,
      languageName1: "Node.js",
      icon2: nestLogo,
      languageName2: "Nest.js",
      icon3: aspLogo,
      languageName3: "Asp.js",
      icon4: phpLogo,
      languageName4: "Php.js",
      icon5: laravelLogo,
      languageName5: "Laravel",
      

    },
  },
  
  {
    type: "Infrastructure",
    data: {
      icon1: awsLogo,
      languageName1: "AWS",
      icon2: gcpLogo,
      languageName2: "GCP",
      icon3: azureLogo,
      languageName3: "Azure",
      icon4: herokuLogo,
      languageName4: "Heroku",
      icon5: serverlessLogo,
      languageName5: "Serverless.js",
      

    },
  },
  
  {
    type: "Languages",
    data: {
      icon1: typescriptLogo,
      languageName1: "Typescript",
      icon2: javascriptLogo,
      languageName2: "Javascript",
      icon3: cLogo,
      languageName3: "C#",
     
      

    },
  },
  
];
const techDataRight = [
  {
    type: "front-end",
    data: {
      icon1: vueLogo,
      languageName1: "Vue.js",
      icon2: reactLogo,
      languageName2: "React",
    },
  },
  
  {
    type: "Mobile",
    data: {
      icon1:reactLogo,
      languageName1: "React Native",
      icon2: kotlinLogo,
      languageName2: "Kotlin",
      icon3: swiftLogo,
      languageName3: "Swift",

    },
  },
  
  {
    type: "Database",
    data: {
      icon1: postgresqlLogo,
      languageName1: "PostgreSQL",
      icon2: mysqlLogo,
      languageName2: "MySQL",
      icon3: mongodbLogo,
      languageName3: "MongoDB",
      icon4: herokuLogo,
      languageName4: "Heroku",
      icon5: snowflakeLogo,
      languageName5: "Snowflake",
      

    },
  },
  
  {
    type: "Blockchain",
    data: {
      icon1: solidityLogo,
      languageName1: "Solidity",
      icon2: rustLogo,
      languageName2: "Rust",
      icon3: golangLogo,
      languageName3: "Golang",
      icon4: web3jsLogo,
      languageName4: "Web3.js",
      icon5: substrateLogo,
      languageName5: "Substrate",
      

    },
  },
];







const TechnologyStack = () => {
  return (
    <>
     <div className='technology-section'>
      <div class="technology-container">
        <div className="sub-heading-wrapper">
        <h3 class="technology-sub-heading technologies-text-primary">Technology stack</h3>

        </div>

        <div className="technology-main-heading">
          <h1>We’re using proven and modern technologies</h1>
          <p>
            We leverage a cutting-edge technology stack to deliver robust,
            scalable, and future-proof solutions tailored to your business
            needs.
          </p>
        </div>

        <div className="Technologies-row">
        {/* <Technologies type="front-end" data={{icon1:vueLogo,languageName1:"Vue.js",icon2:reactLogo,languageName2:"React"}}/>
        <Technologies type="backend-end" data={{icon1:NodeLogo,languageName1:"Node.js",icon2:NestLogo,languageName2:"Nest.js"}}/> */}
      {techData.map((tech, index) => (
        <Technologies key={index} type={tech.type} data={tech.data} />
      ))}
        </div>

      <div className='Mv-Technologies-row'>
      <div class="left-technologies">
      {techDataLeft.map((tech, index) => (
        <Technologies key={index} type={tech.type} data={tech.data} />
      ))}
        </div> 
        <div class="right-technologies">
        {techDataRight.map((tech, index) => (
        <Technologies key={index} type={tech.type} data={tech.data} />
      ))}
        </div>


      </div>

            
        

       
      </div>
    </div>
    
    </>
  )
}

export default TechnologyStack