import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './AppRoutes'
import { useAuth } from '../features/auth/hooks/useAuth'

const App = () => {
    const auth = useAuth()
    useEffect(()=>{
        auth.handleGetMe()
    },[])
    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App