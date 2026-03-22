import { useState } from "react"

import Home from "./pages/home"
import Login from "./pages/login"

import Haritha from "./pages/haritha"
import Arkaan from "./pages/arkaan"
import Kaushik from "./pages/kaushik"
import Imran from "./pages/imran"
import Mohansai from "./pages/mohansai"
import Vasantha from "./pages/vasantha"

export default function App() {
  const [page, setPage] = useState("home")
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("hakim_auth") === "true"
  )

  const logout = () => {
    localStorage.removeItem("hakim_auth")
    setAuthenticated(false)
    setPage("home")
  }

  // 🔐 Login Gate
  if (!authenticated) {
    return (
      <Login
        onSuccess={() => {
          localStorage.setItem("hakim_auth", "true")
          setAuthenticated(true)
        }}
      />
    )
  }

  // 🎓 Student Pages Routing
  if (page === "haritha")
    return <Haritha onBack={() => setPage("home")} onLogout={logout} />

  if (page === "arkaan")
    return <Arkaan onBack={() => setPage("home")} onLogout={logout} />

  if (page === "kaushik")
    return <Kaushik onBack={() => setPage("home")} onLogout={logout} />

  if (page === "imran")
    return <Imran onBack={() => setPage("home")} onLogout={logout} />

  if (page === "mohansai")
    return <Mohansai onBack={() => setPage("home")} onLogout={logout} />

  if (page === "vasantha")
    return <Vasantha onBack={() => setPage("home")} onLogout={logout} />

  // 🏠 Home
  return <Home onSelect={setPage} />
}
