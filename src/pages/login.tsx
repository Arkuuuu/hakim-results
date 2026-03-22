import { useState } from "react"

export default function Login({ onSuccess }: any) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (password === "hakim123") {
      onSuccess()
    } else {
      setError("Wrong password")
    }
  }

  return (
    <div
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          background: "#151515",
          padding: 40,
          borderRadius: 12,
          width: 320,
          textAlign: "center"
        }}
      >
        <h2>HAKIM</h2>
        <p>Enter password</p>

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginTop: 10,
            borderRadius: 6,
            border: "1px solid #333",
            background: "#0b0b0b",
            color: "white"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            marginTop: 15,
            width: "100%",
            padding: 10,
            borderRadius: 6,
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer"
          }}
        >
          Enter
        </button>

        {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
      </div>
    </div>
  )
}
