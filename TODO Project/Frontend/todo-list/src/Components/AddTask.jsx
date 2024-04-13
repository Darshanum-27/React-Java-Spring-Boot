import React from 'react';
import {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
            <div style={{position:"absolute",top:"20%",left:"15%"}}>
                        <Card sx={{ minWidth: 1000 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    <h2 style={{marginLeft:"30px"}}>Enter New Task</h2>
                                    <input type="text" size="70" placeholder="Enter the Task Id" style={{fontSize:"30px", margin:"30px"}} onChange={e => setId(e.target.value)}></input><br/>
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <input type="text" size="70" placeholder="Enter the Task Name" style={{fontSize:"30px", margin:"30px"}} onChange={e => setTask(e.target.value)}></input><br/>
                                </Typography>
                                <Typography variant="body2">
                                    <input type="text" size="70" placeholder="Enter DeadLine" style={{fontSize:"30px", margin:"30px"}} onChange={e => setDeadLine(e.target.value)}></input><br/>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" style={{marginLeft:"30px",marginBottom:"10px",paddingLeft:"10%", paddingRight:"10%"}} disableElevation onClick={e => sendData(e)}> Send Data</Button>
                            </CardActions>
                        </Card>
                    </div>
            </form>
        </div>
    )
}
export default AddTask