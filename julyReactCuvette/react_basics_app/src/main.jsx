import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseStateHook from './components/state/useStateHook.jsx'
// import App from './App.jsx'
import ReactProps from './ReactProps.jsx'
import Card from './components/Card.jsx'
// import SampleComponent from './components/state/SampleComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <App />
    <App />
    <App /> */}
    {/* <ReactProps title="Task 1" backgroundColor="red" /> */}
    {/* <ReactProps title="Task 2" backgroundColor="green" /> */}
    {/* <ReactProps title="Task 3" backgroundColor="blue" /> */}
    {/* <Card>
      <h2>This is a card</h2>
      <p>This is a card description</p>
    </Card> */}
    {/* <SampleComponent /> */}
    <UseStateHook />
  </StrictMode>,
)





// render method s going to display for JSX means that it is going to display the JSX/React code in the browser.
