import { useAuth } from 'context/AuthContext'
export default function Login() {
  const { login } = useAuth()

  return (
    <div>
      <h1>Splash Page</h1>
      <p>Click below to log in</p>
      <button onClick={login}>Login</button>
    </div>
  )
}
