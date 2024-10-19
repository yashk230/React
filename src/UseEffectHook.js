import { useState, useEffect } from "react";

function UseEffectHook()
{
    const [count,setCounter] = useState(0);
    useEffect (()=>{
        console.log("Only state depends mounted");
    },[count])

    return(
        <>
        <p>{count}</p>
        <button onClick={()=>setCounter(count+1)}>
            Increment
        </button>
        </>
    )
}

export default UseEffectHook

