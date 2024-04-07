import { Outlet } from 'react-router-dom'
import { useAuth } from 'context/AuthContext'
import Login from 'src/components/pages/Login'

const ProtectedRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <div>Loading...</div>
  } else if (!isAuthenticated) {
    return <Login />
  }
  return <Outlet />
}

export default ProtectedRoutes
