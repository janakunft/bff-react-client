import React, { useState, useEffect, useContext } from 'react'

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState()
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState()

  const serverUrl = import.meta.env.VITE_SERVER_URL
  const clientUrl = import.meta.env.VITE_CLIENT_URL

  useEffect(() => {
    async function getUser() {
      setIsLoading(true)
      const response = await fetch(serverUrl + '/api/user', {
        credentials: 'include'
      })
      const json = await response.json()

      setIsAuthenticated(json.isAuthenticated)
      setIsLoading(false)
      if (json.isAuthenticated) setUser(json.claims)
    }
    getUser()
  }, [serverUrl])

  const login = () => {
    const encodedClientUrl = encodeURIComponent(clientUrl)
    window.location.href = `${serverUrl}/api/login?returnUrl=${encodedClientUrl}`
  }

  const logout = () => {
    window.location.href = serverUrl + '/api/logout'
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
