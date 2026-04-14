import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Compoment//JSX/Header";
import LessonPage from "./Pages/LessonPage";
import PracticePage from "./Pages/PracticePage";
import AssignmentPage from "./Pages/AssignmentPage.jsx";

import './App.css'

function App() {

  return (
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/lesson" element={<LessonPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/assignment" element={<AssignmentPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
