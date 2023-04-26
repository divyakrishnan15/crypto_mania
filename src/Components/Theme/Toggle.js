import React, { useContext, useEffect, useState } from "react";
import "./Toggle.css";
import { themeContext } from "./UseThemeContextReducer";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";

const Toggle = () => {
  const[width, setWidth] = useState(true)
  const darkTheme = useContext(themeContext);
  console.log("Toggle theme=== ", darkTheme);

  const darkMode = darkTheme.state.darkMode;

  const handleClick = () => {
    darkTheme.dispatch({ type: "toggle" });
  };

  visualViewport.addEventListener("resize",  () => {
    setWidth(() => window.innerWidth > 1070 ? true : false)
    // console.log(window.innerWidth, window.innerWidth > 1070 ? true : false)
  })
  
  return (
    <div className="toggle" onClick={handleClick} style={width ? {borderColor:"orange"} : {borderColor:"white"}}>
      {/* <Sun size="540" color="#745cec"/>
      <Moon size="540" color="#745cec"/> */}
      <Sun size="540" color={width ? "orange" : "white"}/>
      <Moon size="540" color={width ? "orange" : "white"}/>
      <div
        className="t-button"
        style={darkMode ? { left: "3px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
