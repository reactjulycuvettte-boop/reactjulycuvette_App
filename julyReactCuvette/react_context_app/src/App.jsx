import { ThemeProvider } from './components/ThemeContext'
import './App.css'
// import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <>
    <ThemeProvider>
      <div className="app">
        {/* <Header /> */}
        <Content />
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
