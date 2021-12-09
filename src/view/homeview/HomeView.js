import React from "react"
import "./HomeView.css"
import GetStarted from "../../components/getStarted/GetStarted"
import Footer from "../../components/footer/Footer"
import StravaApi from "../../shared/api/StravaApi"
import ListOfUsers from "../../components/listOfUsers/ListOfUsers"


// Main and home view

const HomeView = () => {
  return (
    <>
      <StravaApi textInfo={false} />
      <h2 id="h2Home">Welcome to TrekNTrain</h2>
      <div className="homeView">
        <section className="textField">
          <h3>
            Click button bellow to get most recent activity <br />
            Or press menu in the top right corner to see more statistics
          </h3>
          <GetStarted />
          </section>
          <div className="users">
            <ListOfUsers />
          </div>
      </div>
      <Footer />
    </>
  )
}

export default HomeView
