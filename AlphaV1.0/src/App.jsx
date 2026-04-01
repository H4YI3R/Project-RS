import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Compoment/HF/JS/Header.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Header />

          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second/>} />

          <Footer/>
        </Routes>
      </BrowserRouter>
  );
}

export default App
