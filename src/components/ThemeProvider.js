import { createContext, useContext, useState } from "react" 
 
const ThemeConext = createContext() 
 
export function ThemeProvider({ children }) { 
  const [isDark, setIsDark] = useState(false) 
  const toogleDarkMode = ()=>{ 
    setIsDark((prevMode)=> !prevMode) 
  } 
   
  return( 
        <ThemeConext.Provider value={{isDark,toogleDarkMode}}> 
            {children} 
        </ThemeConext.Provider> 
  ) 
} 
  
export const useTheme = () => useContext(ThemeConext)