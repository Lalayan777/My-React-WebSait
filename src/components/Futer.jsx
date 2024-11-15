import { useTheme } from "./ThemeProvider";


function Futer() {
  const {isDark, toogleDarkMode} = useTheme() 
  console.log(isDark); 
  const themeStyle = { 
    backgroundColor:!isDark?"black":"white", 
    color:!isDark?"white":"black" 
  } 

  return (
    <div className="futerCont" style={themeStyle}>
      @2024|My WebSait/Styles Bild With My Team
    </div>
  );
}

export default Futer;