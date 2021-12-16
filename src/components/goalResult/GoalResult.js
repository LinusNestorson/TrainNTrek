import { React, useContext, useState } from 'react'
import './GoalResult.css'
import { RunningDistanceContext } from '../../shared/provider/RunningDistanceProvider'
import { CyclingDistanceContext } from '../../shared/provider/CyclingDistanceProvider'
import { HikingDistanceContext } from '../../shared/provider/HikingDistanceProvider'
import { RunningPaceContext } from '../../shared/provider/RunningPaceProvider'
import { CyclingPaceContext } from '../../shared/provider/CyclingPaceProvider'
import { HikingPaceContext } from '../../shared/provider/HikingPaceProvider'
import { RunningTimeContext } from '../../shared/provider/RunningTimeProvider'
import { CyclingTimeContext } from '../../shared/provider/CyclingTimeProvider'
import { HikingTimeContext } from '../../shared/provider/HikingTimeProvider'
import { SportTypeContext } from '../../shared/provider/SportTypeProvider'

// Comonent that shows the status of activity goals

const GoalResult = () => {
    const [sport, setSport] = useContext(SportTypeContext)
    const [runningDistance, setRunningDistance] = useContext(RunningDistanceContext)
    const [cyclingDistance, setCyclingDistance] = useContext(CyclingDistanceContext)
    const [hikingDistance, setHikingDistance] = useContext(HikingDistanceContext)
    const [runningPace, setRunningPace] = useContext(RunningPaceContext)
    const [cyclingPace, setCyclingPace] = useContext(CyclingPaceContext)
    const [hikingPace, setHikingPace] = useContext(HikingPaceContext)
    const [runningTime, setRunningTime] = useContext(RunningTimeContext)
    const [cyclingTime, setCyclingTime] = useContext(CyclingTimeContext)
    const [hikingTime, setHikingTime] = useContext(HikingTimeContext)

    function DistanceGoal() {
        if (sport == null) return 0;
        else if (sport === "Running") {
            if (runningDistance == null) return 0
            else return runningDistance
        }
        else if (sport === "Cycling") {
            if (cyclingDistance == null) return 0
            else return cyclingDistance
        }
        else if (sport === "Hiking") {
            if (hikingDistance == null) return 0
            else return hikingDistance
        }
        else return 0
    }

    function PaceGoal() {
        if (sport == null) return 0;
        else if (sport === "Running") {
            if (runningPace == null) return 0
            else return runningPace
        }
        else if (sport === "Cycling") {
            if (cyclingPace == null) return 0
            else return cyclingPace
        }
        else if (sport === "Hiking") {
            if (hikingPace == null) return 0
            else return hikingPace
        }
        else return 0
    }
    function TimeGoal() {
        if (sport == null) return 0;
        else if (sport === "Running") {
            if (runningTime == null) return 0
            else return runningTime
        }
        else if (sport === "Cycling") {
            if (cyclingTime == null) return 0
            else return cyclingTime
        }
        else if (sport === "Hiking") {
            if (hikingTime == null) return 0
            else return hikingTime
        }
        else return 0
    }
    function DistanceMock() {
        if (sport === 'Running') return 8;
        if (sport === 'Cycling') return 20;
        if (sport === 'Hiking') return 4;
        else return 0
    }
    function PaceMock() {
        if (sport === 'Running') return 2;
        if (sport === 'Cycling') return 5;
        if (sport === 'Hiking') return 1;
        else return 0
    }
    function TimeMock() {
        if (sport === 'Running') return 8;
        if (sport === 'Cycling') return 5;
        if (sport === 'Hiking') return 2;
        else return 0
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
                <p> {DistanceMock()}/{DistanceGoal()} km</p>
                <p> {PaceMock()}/{PaceGoal()} m/s</p>
                <p> {TimeMock()}/{TimeGoal()} h</p>
            </div>
        </div>
    )
}

export default GoalResult
