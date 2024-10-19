import { useEffect, useState } from "react";

function UseEffectHookMsg()
{
    const [count,setCounter] = useState(0);
    const [msg,setMsg] = useState("Hello");
    useEffect (()=>{
        setTimeout(()=>{
            setMsg("Good Morning");
        },2000)
    },[msg])

    return(
        <>
        <p>{msg}</p>
        </>
    )
}

export default UseEffectHookMsg