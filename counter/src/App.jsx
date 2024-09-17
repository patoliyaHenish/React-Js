import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hooks to make counter
  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    if(counter < 20) {
      // console.log("clicked", counter);
      setCounter((preCounter) => preCounter + 1);
      setCounter((preCounter) => preCounter + 1);
      setCounter((preCounter) => preCounter + 1);
    }
  }

  const removeValue= () => {
    if(counter != 0){
      counter = counter - 1;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase value</button>
      <br/>
      <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
