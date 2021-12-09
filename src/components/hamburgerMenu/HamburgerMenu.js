import React, { useContext } from "react";
import "./HamburgerMenu.css";
import Hamburger from "../../shared/img/Hamburger.svg";
import { Link, useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext } from "../../shared/provider/UserProvider";

// Hamburger menu showed in the navbar

const HamburgerMenu = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setAuthenticatedUser(false);
    history.push(RoutingPath.homeView, "You are now logged out!");
  };

  return (
    <div className="hamburgerWrapper">
      <img className="hamburgerMenu" src={Hamburger} alt="hamburgermenu" />
      <div className="dropDownAlts">
        <Link to={RoutingPath.homeView}>
          <li> Home </li>
        </Link>
        <Link to={RoutingPath.statsView}>
          <li> Stats </li>
        </Link>
        <Link to={RoutingPath.searchView}>
          <li> Search</li>
        </Link>
        <Link to={RoutingPath.bmiView}>
          <li> BMI calculator </li>
        </Link>
        <Link to={RoutingPath.goalView}>
          <li> Goal </li>
        </Link>
        <Link to={RoutingPath.calorieView}>
          <li> Calorie Counter </li>
        </Link>
        <Link to={RoutingPath.settingsView}>
          <li> Settings </li>
        </Link>
        <li onClick={() => logout()}>Logout</li>
      </div>
    </div>
  );
};

export default HamburgerMenu;
