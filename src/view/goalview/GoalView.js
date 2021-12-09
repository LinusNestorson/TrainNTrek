import React from "react"
import "./GoalView.css"
import Footer from "../../components/footer/Footer"
import GoalMenu from "../../components/goalMenu/GoalMenu"
import GoalForm from "../../components/goalForm/GoalForm"
import GoalResult from "../../components/goalResult/GoalResult"

const GoalView = () => {

    return (
        <>
            <div className="goalView">
                <section className="componentField">
                    <div className="headerText">
                        <h2>Set your personal Goals!</h2>
                    </div>
                    <div className="activityMenu">
                        <GoalMenu />
                    </div>
                    <div className="activityForm">
                        <GoalForm />
                    </div>
                    <div className="activityGoals">
                        <GoalResult />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default GoalView