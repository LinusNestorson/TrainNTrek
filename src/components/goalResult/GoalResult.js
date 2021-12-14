import { React, useContext } from 'react'
import './GoalResult.css'
import { GoalDistanceContext } from '../../shared/provider/GoalDistanceProvider'
import { GoalPaceContext } from '../../shared/provider/GoalPaceProvider'
import { GoalTimeContext } from '../../shared/provider/GoalTimeProvider'

const GoalResult = () => {
  const [pace, setPace] = useContext(GoalPaceContext)
  const [time, setTime] = useContext(GoalTimeContext)
  const [distance, setDistance] = useContext(GoalDistanceContext)

    function DistanceGoal() {
        if (distance == null) return 100;
        else return distance
    }
    function PaceGoal() {
        if (pace == null) return 2;
        else return pace
    }
    function TimeGoal() {
        if (time == null) return 8;
        else return time
    }

    return (
        <div className="goalFormWrapper">
            <div className="header1">
                <p> Type </p>
            </div>
            <div className="header2">
                <p> Actual / Goal </p>
            </div>
            <div className="goalType">
                <p> Distance Goal: </p>
                <p> Average Pace: </p>
                <p> Activity time: </p>
            </div>
            <div className="goalValue">
                <p> 1/{DistanceGoal()} km</p>
                <p> 1.5/{PaceGoal()} m/s</p>
                <p> 7/{TimeGoal()} h</p>
            </div>
        </div>
    )
}

export default GoalResult
