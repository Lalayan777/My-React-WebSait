import { NavLink } from "react-router-dom";
import { useTheme } from "./ThemeProvider";


function Header() {
  const {isDark, toogleDarkMode} = useTheme() 
  console.log(isDark); 
  const themeStyle = { 
    backgroundColor:!isDark?"black":"white", 
    color:!isDark?"white":"black" 
  } 

  return (
    <div className="headerCont" style={themeStyle}>
         <h1 style={themeStyle}>My Websait</h1>
         <div className="textCont">
            <NavLink to="/home" style={themeStyle}>Home</NavLink>
            <NavLink to="/about" style={themeStyle}>About</NavLink>
            <NavLink to="/services" style={themeStyle}>Services</NavLink>
            <NavLink to="/contacts" style={themeStyle}>Contacts</NavLink>
         </div>
         <button onClick={toogleDarkMode}>{isDark?"IsDark":"IsLight"}</button>
    </div>
  );
}

export default Header;