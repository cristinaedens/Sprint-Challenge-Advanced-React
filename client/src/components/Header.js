import React from "react";
import {useDarkMode} from "../hooks/DarkMode";

const Header = () => {
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  } // this closes toggleMode
  const [darkMode, setDarkMode] = useDarkMode(toggleMode);

  return(
    <div className="navbar">
      <button className="togglebtn" onClick={toggleMode}>Toggle Dark-Mode</button>
    </div>
  )
} //this closes Header

export default Header;