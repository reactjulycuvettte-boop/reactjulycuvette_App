import { useMemo, useState, useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [renderCount, setRenderCount] = useState(0);

  // useEffect(() => {
  //   setRenderCount(prev => prev + 1);
  // });

  const expensiveCalculationWithoutMemo = (num) => {
    console.log('Without Memo: Calculating... (expensive operation)');
    for (let i = 0; i < 10; i++) {
      console.log(i)
    } // Artificial delay
    return num * 2;
  };

  // const expensiveCalculationWithMemo = useMemo(() => {
  //   console.log('With Memo: Calculating... (expensive operation)');
  //   for (let i = 0; i < 100; i++) {
  //     console.log(i)
  //   } // Artificial delay
  //   return number * 2;
  // }, []);



  const doubleValueWithoutMemo = expensiveCalculationWithoutMemo(number);
  // const doubleValueWithMemo = expensiveCalculationWithMemo; 

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      margin: '10px',
      backgroundColor: darkMode ? '#333' : '#fff',
      color: darkMode ? '#fff' : '#000'
    }}>
      <h2>useMemo Example</h2>
      <p>Component Render Count: {renderCount}</p>
      
      <div>
        <label>Enter a number: </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 1)}
          style={{ margin: '5px', padding: '5px' }}
        />
      </div>
      
      <div style={{ margin: '10px 0' }}>
        <button onClick={toggleDarkMode} style={{ padding: '5px 10px' }}>
          Toggle Dark Mode (causes re-render)
        </button>
      </div>
      
      <div style={{ margin: '10px 0' }}>
        <h3>Without useMemo:</h3>
        <p>Calculation runs on EVERY render (even dark mode toggle)</p>
        <p>Result: {doubleValueWithoutMemo}</p>
        
        <h3>With useMemo:</h3>
        <p>Calculation runs ONLY when number changes</p>
        {/* <p>Result: {expensiveCalculationWithMemo}</p> */}
      </div>
      
      <div style={{ 
        backgroundColor: darkMode ? '#555' : '#f0f0f0',
        padding: '10px',
        margin: '10px 0'
      }}>
        <p><strong>Observation:</strong></p>
        <p>Try changing the number - both calculations run</p>
        <p>Try toggling dark mode - only "Without useMemo" runs every time</p>
        <p>useMemo prevents expensive recalculations on unrelated renders</p>
      </div>
    </div>
  );
}

export default App;



































































































// import { useRef, useState, useEffect } from "react"

// import "./App.css"

// const App = () => {
//   const [ name, setName ] = useState("")
  
//   const inputRef = useRef(null)
//   const renderCount = useRef(0)

//   useEffect(() => {
//     inputRef.current.focus()
//     inputRef.current.style.backgroundColor = "yellow"

//     console.log("Component Mounted...")
//   }, [])

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1
//     console.log(`Component rendered ${renderCount.current}`)
//   })

  
//   // console.log(inputRef.current.value)

//   const handleButtonClick = () => {
//     inputRef.current.focus()
//     inputRef.current.style.backgroundColor = "red"
//   }

//   return (
//     <>
//       <h1>Learning useRef Hook</h1>
//       <div style={{ padding:"20px", border: "1px solid #ccc", margin: "10px"}}>
//         <h2>useRef Hook</h2>
//         <input ref={inputRef}  type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type Something...." style={{ padding: "5px", margin: "5px"}}/>
//         <button onClick={handleButtonClick} style={{ margin: "5px"}}>Focus Input</button>
//       </div>
//     </>
//   )
// }

// export default App;