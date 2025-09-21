import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ( { children }) => {
  const [isDarkMode, setIsDarkMode ] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode ? { background: "red", text: "#fff", primary: "#bb86fc"} 
    : { background: "#fff", text: "#000", primary: "#6200ee"}
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

// export const useTheme = () => {
//   const context = useContext(ThemeContext)
//   if(!context) {
//     throw new Error("useTheme must be used within a Themeprovider")
//   }
//   return context
// }
