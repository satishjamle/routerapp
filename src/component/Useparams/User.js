// import React from 'react'
// import { useParams} from 'react-router-dom'

// export const User = () => {

//     const {fname ,lname} = useParams()
//   return (
//     <>
//     <h1>my name is   {fname}  <br /> {lname} </h1>
//     </>
//   )
// }

// use location  hooks----------------------------

// import React from "react";
// import { useLocation, useParams } from "react-router-dom";

// export const User = () => {
//   const location = useLocation();
//   console.log(location);

//   const { fname, lname } = useParams();
//   return (
//     <>
//       <h1>
//         my name is {fname} <br /> {lname}{" "}
//       </h1>
//       <p>my current location is {location.pathname}</p>
//       {location.pathname === `/User/satish/Developer` ? (
//         <button onClick={()=>alert('you are osm')}> click me</button>
//       ) : null}
//     </>
//   );
// };

// use history hooks--------------------
import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom"; // Import useNavigate

export const User = () => {
  const location = useLocation();
  console.log(location);

  const { fname, lname } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  return (
    <div className="user-container">
      <h1 className="user-heading">
        My name is {fname} <br /> {lname}
      </h1>
      <p className="user-location">My current location is {location.pathname}</p>
      {location.pathname === `/User/satish/Developer` ? (
        <button onClick={() => {
          alert('You are awesome!');
          navigate('/another-page'); // Example of navigation with useNavigate
        }}>
          Click Me
        </button>
      ) : null}
    </div>
  );
};
