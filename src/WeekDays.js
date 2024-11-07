import React from "react";

function WeekDays()
{
    const WeekDays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    return(
        <div>
                <h5>WeekDays</h5>
                <ul className="container">  {WeekDays.map((days)=>(
                    <li> &nbsp; {days}</li>
                ))}
                </ul>
            <select className="form-select" aria-label="Select a weekday">
                <option>Select</option>
                {WeekDays.map((days)=>(
                    <option>{days}</option>
                ))}
            </select>
        </div>
    );
}

export default WeekDays