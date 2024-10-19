import React from "react";

function FruitsArrays()
{
    const fruits1=["apple","banana"];
    const fruits2=["cherry","orange"];
    const Fruits=fruits1.concat(fruits2);

    return(
        <ol>
            {Fruits.map((fruits)=>(
                <li>{fruits}</li>
            ))}
        </ol>
    );
}

export default FruitsArrays