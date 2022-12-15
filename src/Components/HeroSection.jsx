import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";


  

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (

    <div
      style={{
        padding: "0.1rem",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: "center",
        height : "100vh",
    
      }}
    >
      <h1>Context API Theme Toggler</h1>
      <p>Click To Change The Theme</p>
     
      <button onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
      
      style={{
        backgroundColor: "#26ae60",
        padding: "10px 150px",
        fontSize: "20px",
        color: "#FFF",
        
      }}
      >
     
     {themeMode === "light" ? "Light Mode Click to Toggle to Dark Mode" : "Dark Mode Click to Toggle to Light Mode"}
      </button>
    </div>
  );
};

export default HeroSection;
