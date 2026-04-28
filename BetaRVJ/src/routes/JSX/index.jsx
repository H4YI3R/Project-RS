import Home from '../../pages/JSX/Home.jsx';
import About from '../../pages/JSX/About.jsx';
import Signin from '../../pages/JSX/Signin.jsx';
import Signup from '../../pages/JSX/Signup.jsx';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/signin', element: <Signin /> },
    { path: '/signup', element: <Signup /> },
];

export default routes;