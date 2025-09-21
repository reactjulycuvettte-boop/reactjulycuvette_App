import React from 'react'
import { useTheme } from "./ThemeContext"

const Header = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme()

  return (
    <div>
      <header style={{
        backgroundColor: colors.background,
        color: colors.text,
        padding: "1rem"
      }}>
        <h1>My App</h1>
        <button onClick={toggleTheme}>Switch to {isDarkMode ? "Light" : "Dark"} Mode</button>
      </header>
    </div>
  )
}

export default Header
