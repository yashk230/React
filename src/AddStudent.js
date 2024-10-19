import React, { useState } from "react";

function AddStudent() {
    const [name, setName] = useState('');
    const [studName, setStudName] = useState([]);

    function getStudName() {
        studName.push({
            id: studName.length,
            value: name
        });
        
        setName('');
    }

    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <p>{name}</p>

            <button onClick={getStudName}>Add Student</button>

            <ol>
                {studName.map(ele => (
                    <li key={ele.id}>{ele.value}</li>
                ))}
            </ol>
        </>
    );
}

export default AddStudent;
