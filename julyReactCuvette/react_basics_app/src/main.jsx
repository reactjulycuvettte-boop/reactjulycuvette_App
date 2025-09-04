import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ReactProps from './ReactProps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <App />
    <App />
    <App /> */}
    <ReactProps title="Task 1" backgroundColor="red" />
    <ReactProps title="Task 2" backgroundColor="green" />
    <ReactProps title="Task 3" backgroundColor="blue" />
  </StrictMode>,
)





// render method s going to display for JSX means that it is going to display the JSX/React code in the browser.
