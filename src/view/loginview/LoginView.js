import React, { useState, useContext } from "react"
import { UserContext } from "../../shared/provider/UserProvider"
import { useHistory, useLocation } from "react-router-dom"
import "./LoginView.css"
import Footer from "../../components/footer/Footer"
import RoutingPath from "../../routes/RoutingPath"
import Register from "./LoginMethod"


// Login View, useEffect and HTTP-call is made inside of Weather component which is ran directly when loadning app.

const LoginView = () => {
  // const {login} = require("./LoginMethod")
  const history = useHistory()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  const location = useLocation()

  const login = () => {
    if(localStorage.getItem("username") == username){
      setAuthenticatedUser(username)
      history.push(RoutingPath.homeView)
    }
  }

  return (
    <>
    <div className="loginView">
      <section className="loginContainer">
        <h1>{location.state}</h1>
        <div className="inputArea">
          <div>
            <input
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <br />
          <div className="loginButtons">
            <button className="btn" onClick={() => login()}>
              Login
            </button>
            <button className="btn" onClick={() => Register(username, password)}>
              Register
            </button>
          </div>
        </div>
      </section>
    </div>
          <Footer />
    </>
  )
}

export default LoginView
