import React from "react";

function WeekDays()
{
    const WeekDays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    return(
        <ol>
            {WeekDays.map((days)=>(
                <li>{days}</li>
            ))}
        </ol>
    );
}

export default WeekDays