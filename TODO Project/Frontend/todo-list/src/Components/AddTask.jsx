import React from 'react';
import {useState} from 'react'
import axios from "axios";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const AddTask = () =>{
    let [task,setTask] = useState('')
    let [id,setId] = useState('')
    let [DeadLine,setDeadLine] = useState('')

    const sendData = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8080/createTask", {
            "id": id,
            "name": task,
            "time":"Monday 9:00 PM",
            "DeadLine":DeadLine,
          }).then((response) => {
            console.log(response.status, response.data);
    });
    }

    return (
        <div>
            <form>
                Enter the Task Id <input type="text" onChange={e => setId(e.target.value)}></input><br/>
                Enter the Task Name <input type="text" onChange={e => setTask(e.target.value)}></input><br/>
                Enter the Task DeadLine <input type="text" onChange={e => setDeadLine(e.target.value)}></input><br/>
                <button onClick={e => sendData(e)}>Submit</button>
            </form>
        </div>
    )
}
export default AddTask