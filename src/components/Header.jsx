import React from "react";

const Header = ({ title }) => {
  const defaultTitle = "Prueba API";
  const displayedTitle = title || defaultTitle;

  return (
    <div className="header">
  
      <h1>{displayedTitle}</h1>
    </div>
  );
};

export default Header;

