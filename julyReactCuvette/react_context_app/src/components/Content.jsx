import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Content = () => {
  const themeContext = useContext(ThemeContext)
  console.log(themeContext)
  const { isDarkMode, toggleTheme } = themeContext

  return (
    <>
    <div style={{ backgroundColor : isDarkMode ? "magenta" : "green", padding: "1.5rem" }}>
      jkagasbsddgfbafuhabfuygbf76aygfuayshc
    </div>
    <button onClick={toggleTheme}>Switch Mode</button>
    </>
  )
}

export default Content
