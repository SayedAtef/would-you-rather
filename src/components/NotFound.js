import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1 className="display3 text-center">404</h1>
      <h2 className="display4 text-center">
        <Link to="/">Home Page</Link>
      </h2>
    </>
  );
};

export default NotFound;
