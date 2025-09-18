import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import UseStateHook from './components/state/useStateHook.jsx'
// import App from './App.jsx'
// import ReactProps from './ReactProps.jsx'
// import Card from './components/Card.jsx'
// import SampleComponent from './components/state/SampleComponent.jsx'
// import CounterApp from './components/state/CounterApp.jsx'
// import ToDoApp from './components/state/ToDoApp.jsx'
// import Events from './components/Events/Events'
// import InputListener from "./components/Events/InputListener"
// import FormHandling from './components/Events/FormHandling'
// import { ControlledComponent, UnControlledComponent } from './components/Events/ControlledUnControlled'
// import ListRendering from './components/Lists/ListRendering'
// import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering"
// import NotificationSystem from "./components/ConditionalRendering/NotificationSystem"
// import UseEffect from './components/sideEffects/UseEffect'
// import ApiCall from "./components/API/ApiCall"
// import PostRequest from "./components/API/PostRequest"
import ReducerHook from "./components/reducerHook/ReducerHook"

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
    {/* <UseStateHook /> */}
    {/* <CounterApp /> */}
    {/* <ToDoApp /> */}
    {/* <Events /> */}
    {/* <InputListener /> */}
    {/* <FormHandling /> */}
    {/* <ControlledComponent /> */}
    {/* <UnControlledComponent /> */}
    {/* <ListRendering /> */}
    {/* <ConditionalRendering /> */}
    {/* <NotificationSystem /> */}
    {/* <UseEffect /> */}
    {/* <ApiCall /> */}
    {/* <PostRequest /> */}
    <ReducerHook />
  </StrictMode>,
)





// render method s going to display for JSX means that it is going to display the JSX/React code in the browser.
