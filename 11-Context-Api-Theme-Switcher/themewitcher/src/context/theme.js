
import { createContext, useContext } from "react";

const ThemeContext = createContext ({
    themeMode: "Light",
    darkTheme: ()  => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme (){
    return useContext(ThemeContext)
} 
// yha hm custom hook banaye h jaise hi useTheme() ka use karenge  [useContext] hook apne aap ThemeContext ke value ko fetch kr lega
//isiliye useTheme function se ThemeContext ke andar ki value 
// themeMode: "Light",
// darkTheme: ()  => {},
// lightTheme: () => {},  ko extract kar sakta h
                           