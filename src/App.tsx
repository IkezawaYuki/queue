import { useState } from 'react'
import './App.css'
import Top from "./components/Top"
import "./index.css";


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Top />
    </>
  )
}

export default App
