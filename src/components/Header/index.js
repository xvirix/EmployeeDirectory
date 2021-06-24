import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Employee Directory</h1>
      <p className="text-center">
        Use search box or filter by heading to narrow results.
      </p>
    </header>
  );
};

export default Header;