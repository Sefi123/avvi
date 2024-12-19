import React from 'react'
import "./technologies.css"
// import reactLogo from "../../asset/images/image 283.png"

// const Technologies = ({type,data}) => {
//   return (
//     <>
//     <div className="technologies">
//                 <p>{type}</p>

//                 <div className="languages">
//                   <img src={data.icon1} alt="" />
//                   <p>{data.languageName1}</p>
//                 </div>
//                 <div className="languages">
//                   <img src={data.icon2} alt="" />
//                   <p>{data.languageName2}</p>
//                 </div>
//                 <div className="languages">
//                   <img src={data.icon3} alt="" />
//                   <p>{data.languageName3}</p>
//                 </div>
//                 <div className="languages">
//                   <img src={data.icon4} alt="" />
//                   <p>{data.languageName4}</p>
//                 </div>
//                 <div className="languages">
//                   <img src={data.icon5} alt="" />
//                   <p>{data.languageName5}</p>
//                 </div>
                
//               </div>
//     </>
//   )
// }
const Technologies = ({ type, data }) => {
    // Extract key-value pairs from data dynamically
    const languages = Object.entries(data).filter(([key]) => key.includes("icon"));
  
    return (
      <div className='technologies'>
        <h3 className='technologies-text-primary technologies-bg-secondary'>{type}</h3>
        {languages.map(([iconKey, iconValue], index) => {
          const languageKey = `languageName${index + 1}`;
          return (
            <div className='languages' key={index}>
              <img src={iconValue} alt={data[languageKey]} />
              <p className='technologies-text-primary'>{data[languageKey]}</p>
            </div>
          );
        })}
      </div>
    );
  };
  

export default Technologies