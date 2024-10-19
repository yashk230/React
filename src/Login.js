import { useState } from "react";
function Login()
{

    const [username,setUsername]=useState('');
    const [name,setName]=useState('');

    const submit=(e)=>{
        e.preventDefault();
        setName(username)
    }
    
    return(
        <div className="container">
            <form>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <button type="submit" onClick={submit}>Submit</button>
                {name && <p>{name}</p>}
            </form>
        </div>
    )
    // const [username,setUsername]=useState('');
    // const [password,setPassword]=useState('');

    // const submit=(e)=>{
    //     e.preventDefault();
    //     if(username==='Admin' && password==='Pass123')
    //     {
    //         console.log('Valid Credentials');
    //     }
    //     else{
    //         console.log('Unauthorised user');
    //     }
    // }

    // return(
    //     <div className="container">
    //      <form onSubmit={submit}>
    //         <label>Username :
    //         <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    //         </label>
    //         <br/>
    //         <label>Password :
    //         <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    //      </label>
    //          <br/>
    //         <button type="submit">Submit</button>
    //     </form>
    //     </div>
    // );
}

export default Login;