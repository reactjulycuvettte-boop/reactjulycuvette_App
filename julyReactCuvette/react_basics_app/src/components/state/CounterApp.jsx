import { useState } from "react"


const CounterApp = () => {
  const [ count, setCount ] = useState(0)

  // const badIncrement = () => setCount(count + 1)

  const goodIncrement = () => {
    setCount((prevCount) =>  prevCount + 1)
  }

  const incrementThree = () => {
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }

  // const incrementSimpleThree = () => {
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   setCount(count + 1)
  // }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={goodIncrement}>Reliable + 1</button>
      <button onClick={incrementThree}>+3 Fuctional</button>
      {/* <button onClick={incrementSimpleThree}>+3 Fuctional</button> */}
    </>
  )
}

export default CounterApp;