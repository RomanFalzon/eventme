import axios from 'axios'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import useSiteStore from './store/siteStore.js'
import { router } from './router/router.jsx'
import './index.scss'

try {
    // Get config
    const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/config`
    )

    // Validate response
    if (!response.data || !response.data.success) {
        console.error('Error in fetching config: Invalid response')
        throw new Error('Invalid config response')
    }

    // Use Zustand store to set response
    const setConfig = useSiteStore.getState().setConfig
    setConfig(response.data.config)

    // Render the application after we have a valid config
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    )
} catch (error) {
    console.error('Error fetching config or initializing app:', error)

    // Render the application with default or generic events
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    )

    // Log error to a monitoring service like Sentry
    // Sentry.captureException(error);
}
