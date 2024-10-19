import React, { useState } from "react";

function ToDoList()
{
    const [newTask,setAddTask]=useState('');
    const [task,setTask]=useState([]);

    const getTask=(e)=>{
        setTask([...task,newTask]);
        setAddTask('');
    }

    const deleteTask=(index)=>{
        const newTasks= [...task];
        newTasks.splice(index,1);
        setTask(newTasks);
    }

    return(
        <div class="container">
            <h1>To Do List</h1>
                <input type="text" value={newTask} onChange={(e)=>setAddTask(e.target.value)}/>
                <button onClick={getTask}>
                    Add Task
                </button>

                <br/>
                <ol>
                    {task.map((task,index) => (
                        <li key={index}>
                            {task} <br></br>
                        <button onClick={() => deleteTask(index)}>
                        Delete Task
                        </button>
                        </li>
                    ))}
                </ol>
            <p>Total Tasks : {task.length}</p>
        </div>
    )
}

export default ToDoList;