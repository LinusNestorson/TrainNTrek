import React, { useContext, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import HomeView from "../view/homeview/HomeView"
import LoginView from "../view/loginview/LoginView"
import StatsView from "../view/statsview/StatsView"
import SearchView from "../view/searchview/SearchView"
import GoalView from "../view/goalview/GoalView"
import SettingsView from "../view/settingsView/SettingsView"
import RoutingPath from "./RoutingPath"
import { UserContext } from "../shared/provider/UserProvider"
import BMIView from "../view/bmiview/BMIView"

// Routes and authorisation mechanism

const Routes = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

  const blockRouteIfAuth = (viewNavigation) => {
    return authenticatedUser ? HomeView : viewNavigation
  }

  const blockRouteIfNotAuth = (viewNavigation) => {
    return !authenticatedUser ? LoginView : viewNavigation
  }

  const checkAuthenticatedUserInBrowser = () => {
    setAuthenticatedUser(localStorage.getItem("username"))
  }

  useEffect(() => {
    checkAuthenticatedUserInBrowser()
  }, [])

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route
            exact
            path={RoutingPath.loginView}
            component={blockRouteIfAuth(LoginView)}
          />
          <Route
            exact
            path={RoutingPath.statsView}
            component={blockRouteIfNotAuth(StatsView)}
          />
          <Route
            exact
            path={RoutingPath.searchView}
            component={blockRouteIfNotAuth(SearchView)}
           />
           <Route
            exact
            path={RoutingPath.goalView}
            component={blockRouteIfNotAuth(GoalView)}
           />
            <Route
            exact
            path={RoutingPath.bmiView}
            component={blockRouteIfNotAuth(BMIView)}
          />
          <Route
            exact 
            path={RoutingPath.settingsView}
            component={blockRouteIfNotAuth(SettingsView)}
          />
          <Route
            path={RoutingPath.homeView}
            component={blockRouteIfNotAuth(HomeView)}
          />

        </Switch>
      </div>
    </Router>
  )
}

export default Routes
