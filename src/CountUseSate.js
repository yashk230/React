import React,{useState} from 'react'

function CountUseState()
{
    let[count, setCount] = useState(0);

    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <br></br>
            <button onClick={()=> setCount(count-1)}>Decrement</button>
        </>
    )
}

export default CountUseState;