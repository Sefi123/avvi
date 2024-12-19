import React from "react";
import "./industries-section.css";
import Expertise from "../industry-expertise";
import healthCareLogo from "../../assets/Images/medical.png";
import bankLogo from "../../assets/Images/bank.png";
import ecommerceLogo from "../../assets/Images/shopping.png";
import educationLogo from "../../assets/Images/education.png";
import realEstateLogo from "../../assets/Images/realestate.png";

// const Industries = () => {
//   return (
//     <>
//     <div className="industries-section">
//         <div className="industries-container">
//             <div className="industries-main-heading-wrapper">
//                 <h3 className='industries-sub-heading'>Industries We Serve</h3>
//                 <h1>Industries and Expertises</h1>
//             </div>
//             <div className="industries-row">
//                 <div className="col-6">
//                     <Expertise icon={healthCareLogo} type="Healthcare and Medicine"  responsibility1="Telemedicine" responsibility2="Clinic management"/>

//                 </div>
//                 <div className="col-6">
//                 <Expertise icon={bankLogo} type="FinTech and Banking"  responsibility1="Financial dashboard’s" responsibility2="Peer-to-peer payments" responsibility3="Investment tracking" />

//                 </div>
//             </div>
//             <div className="industries-row">
//                 <div className="col-4">
//                 <Expertise />
//                 </div>
//                 <div className="col-4">
//                 <Expertise />
//                 </div>
//                 <div className="col-4">
//                 <Expertise />
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Industries

const industryData = [
  {
    icon: healthCareLogo,
    type: "Healthcare and Medicine",
    description:
      "Advanced platforms for patient management, telemedicine, and healthcare services.",
    responsibilities: [
      "Telemedicine",
      "Clinic management",
      "Staff workflows",
      "Appointment booking",
      "Lab result tracking",
    ],
  },
  {
    icon: bankLogo,
    type: "FinTech and Banking",
    description:"Advanced platforms for patient management, telemedicine, and healthcare services.",
    responsibilities: [
      "Financial dashboards",
      "Peer-to-peer payments",
      "Investment tracking",
      "Blockchain development",
    ],
  },
  {
    icon: ecommerceLogo,
    type: "E-commerce and Retail",
    description:"Custom-built online stores and product platforms for conversions and growth.",
    responsibilities: [
      "Online Marketplace",
      "Inventory Tracking",
      "Subscription Management",
    ],
  },
  {
    icon: educationLogo,
    type: "Education and E-Learning",
    description:"Interactive tools and platforms that support online education and knowledge sharing.",
    responsibilities: ["Student Collaboration", "Remote Learning"],
  },
  {
    icon: realEstateLogo,
    type: "Real Estate",
    description:"Comprehensive systems for property listings, client management, and data visualization.",
    responsibilities: [
      "Property Management Software",
      "Property Listing Platform",
    ],
  },
];

const Industries = () => {
  return (
    <div className="industries-section">
      <div className="industries-container">
        <div className="industries-main-heading-wrapper">
          <h3 className="industries-sub-heading">Industries We Serve</h3>
          <h1>Industries and Expertises</h1>
        </div>
        <div className="mv-industries-main-heading-wrapper">
          <h3 className="industries-sub-heading">0ur Services</h3>
          <h1>
            Our Team Develops Tailored Solutions For A Variety Of Industries
          </h1>
        </div>

        {/* First industries-row with col-6 */}
        <div className="industries-row">
          {industryData.slice(0, 2).map((industry, index) => (
            <div className="col-6" key={index}>
              <Expertise
                icon={industry.icon}
                type={industry.type}
                description={industry.description}
                responsibilities={industry.responsibilities}
              />
            </div>
          ))}
        </div>

        {/* Second industries-row with col-4 */}
        <div className="industries-row">
          {industryData.slice(2).map((industry, index) => (
            <div className="col-4" key={index}>
              <Expertise
                icon={industry.icon}
                type={industry.type}
                description={industry.description}
                responsibilities={industry.responsibilities}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
