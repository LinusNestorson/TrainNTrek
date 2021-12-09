import { React, useContext } from 'react'
import "./GoalMenu.css"

const GoalResult = () => {


    return (

        <div className="dropdownMenu">
            <p>Activity Menu</p>
            <div className="dropdown-content">
                <ul>
                    <li><button className="listbtn" onClick=""> Running </button></li>
                    <li><button className="listbtn" onClick=""> Cyckling </button></li>
                    <li><button className="listbtn" onClick=""> Hiking </button></li>
                </ul>
            </div>
        </div>
    )
}

export default GoalResult