import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)



  const addValue = () =>{
    console.log("clicked" ,{counter})
    setcounter(counter +1)
  }
  const removeValue = () =>{
    setcounter(counter -1)
  }

  return (
    <>
    <h1>Priyanshu Rai</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
