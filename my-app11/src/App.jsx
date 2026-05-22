import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/JSX/Header";
import LessonPage from "./Pages/Component/LessonPage";
import PracticePage from "./Pages/Component/PracticePage";
import AssignmentPage from "./Pages/Component/AssignmentPage";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Header />
        <hr/>
        <Routes>
          <Route
              path="/"
              element={
                <>
                  <section id="center">
                    <div className="hero">
                      <img src={heroImg} className="base" width="170" height="179" alt="" />
                      <img src={reactLogo} className="framework" alt="React logo" />
                      <img src={viteLogo} className="vite" alt="Vite logo" />
                    </div>
                    <div>
                      <h1>Get started</h1>
                      <p>
                        Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
                      </p>
                    </div>
                    <button
                        type="button"
                        className="counter"
                        onClick={() => setCount((count) => count + 1)}
                    >
                      Count is {count}
                    </button>
                  </section>
                </>
              }
          />

          <Route path="/Ln" element={<LessonPage />} />
          <Route path="/Pt" element={<PracticePage />} />
          <Route path="/Ag" element={<AssignmentPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
