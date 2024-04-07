import { useAuth } from 'context/AuthContext'

export default function Dashboard() {
  const { user, logout } = useAuth()

  const userNameClaim = user.find(c => c.type === 'username')
  const nickNameClaim = user.find(c => c.type === 'nickname')

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {userNameClaim?.value || nickNameClaim?.value}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
