import React from "react";

function FruitsArrays()
{
    const fruits1=["apple","banana"];
    const fruits2=["cherry","orange"];
    const Fruits=fruits1.concat(fruits2);

    return(
        <div>
            <h5>Fruits array</h5>
            {Fruits.map((fruits)=>(
                <p>{fruits}</p>
            ))}
        </div>
    );
}

export default FruitsArrays