import React from "react";
import "./industry-expertise.css";

// const IndustryData=[]
// const Expertise = ({icon,type,responsibility1,responsibility2,responsibility3}) => {
//   return (
//     <>
//       <div className="Expertise">
//         <div className="industries-details">
//           <div className="expertise-image">
//             <img src={icon} alt="" />
//           </div>
//           {/* <h2>Healthcare and Medicine</h2> */}
//           <h2>{type}</h2>
//         </div>
//         <div className="industries-responsibilities">
//           <h3 className="responsibilities-details">{responsibility1}</h3>
//           <h3 className="responsibilities-details">{responsibility2}</h3>
//           <h3 className="responsibilities-details">{responsibility3}</h3>


//         </div>
//       </div>
//     </>
//   );
// };


// const Expertise = ({ icon, type, description,responsibilities = [] }) => {
//   return (
//     <div className="Expertise">
//       <div className="industries-details">
//         <div className="expertise-image">
//           <img src={icon} alt={type} />
//         </div>
//         <h2>{type}</h2>
        
//       </div>
//       <div className="mv-description">
//           <p>{description}</p>
//         </div>

//       <div className="industries-responsibilities">
//         {responsibilities.map((responsibility, index) => (
//           <h3 key={index} className="responsibilities-details">
//             {responsibility}
//           </h3>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Expertise;


const Expertise = ({ icon, type, responsibilities = [] }) => {
  return (
    <div className="Expertise">
      <div className="industries-details">
        <div className="expertise-image">
          <img src={icon} alt={type} />
        </div>
        <h2>{type}</h2>
      </div>

      <div className="industries-responsibilities">
        {responsibilities.map((responsibility, index) => (
          <h3 key={index} className="responsibilities-details">
            {responsibility}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Expertise;









