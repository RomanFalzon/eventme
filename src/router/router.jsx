import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/HomePage'
import About from '../pages/AboutPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
])
