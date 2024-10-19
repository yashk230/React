import React from "react";

function Fruits()
{
    const Fruits=["Apple","Banana","Cherry","Bat"];
    Fruits.pop("Bat")
    return(
        <ol>
          {Fruits.map((fruits)=>(
                <li>{fruits}</li>
            ))} 
        </ol>
    )
}

export default Fruits