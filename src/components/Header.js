import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    
    <div className="ui stackable  pointing menu">
      <div className="   item">BREAKING BAD</div>
      <NavLink exact to="/" className="green item">
        Characters
      </NavLink>
      <NavLink to="/episodes" className="green item">
        Episodes
      </NavLink>
      <NavLink to="/quotes" className="green item">
        Quotes
      </NavLink>
      <NavLink to="/deaths" className="green item">
        Deaths
      </NavLink>
    </div>
    
  );
};

export default Header;
