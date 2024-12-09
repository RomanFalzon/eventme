import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/HomePage'
import About from '../pages/AboutPage'
import Login from '../pages/auth/LoginPage'
import Register from '../pages/auth/RegisterPage'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
])
