import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route pate="1" element={<First />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
