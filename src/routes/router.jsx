import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import Dashboard from 'components/pages/Dashboard'
import Login from 'components/pages/Login'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  }
])

export default router
