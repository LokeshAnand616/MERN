import React, { useContext, useState } from "react";
import { ThemeContext } from "./createContext";

const ThemeProvider=({children})=>{
    const[theme,setTheme]=useState('light');
    return(
        <>
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
        </>
    );
}


export default ThemeProvider;
export const useTheme=()=>{
    return useContext(ThemeContext)
}