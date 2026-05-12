import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/JSX/Header";
import LessonPage from "./Pages/LessonPage";
import PracticePage from "./Pages/PracticePage";
import AssignmentPage from "./Pages/AssignmentPage.jsx";

import './App.css'

function App() {

    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/Ln" element={<LessonPage />} />
                <Route path="/Pt" element={<PracticePage />} />
                <Route path="/Ag" element={<AssignmentPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
