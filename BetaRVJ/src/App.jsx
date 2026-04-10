import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/JSX/Header.jsx';
import Footer from './components/JSX/Footer.jsx';
import routes from './routes/JSX/index.jsx';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;