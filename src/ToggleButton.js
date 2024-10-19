import React,{useState} from "react";

function ToggleButton()
{
    const[data,setData]= useState(false);
    return(
        <>
            {data ? <p>Hello</p> : null}
            <p>{data}</p>

            <button onClick={()=>setData(true)}>Show</button>
            <button onClick={()=>setData(false)}>Hide</button>
            <button onClick={()=>setData(!data)}>Toggle Button</button>
        </>
    )
}

export default ToggleButton;