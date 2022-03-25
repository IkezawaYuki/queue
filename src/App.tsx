import { useState } from 'react'
import './App.css'
import Top from "./components/Top"
import Products from './components/Products';
import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details';


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/products" element={<Products />} />
          <Route path='/details' element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
