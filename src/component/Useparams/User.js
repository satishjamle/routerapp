import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const User = () => {
  const location = useLocation();
  console.log(location);

  const { fname, lname } = useParams();
  return (
    <>
      <h1>
        my name is {fname} <br /> {lname}{" "}
      </h1>
      <p>my current location is {location.pathname}</p>
      {location.pathname === `/User/satish/Developer` ? (
        <button onClick={()=>alert('you are osm')}> click me</button>
      ) : null}
    </>
  );
};