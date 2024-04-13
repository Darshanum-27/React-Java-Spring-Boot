import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import {useState,useEffect} from 'react'

const GetAll = () => {
    let [data,setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/getAllData").then((response) => {
            setData(response.data)
        })},[])

    const taskDelete = (e, id1) =>{
        let url = "http://localhost:8080/deleteTask/"+id1
        axios.post(url).then((respone) =>{
            console.log("deleted successfully")
            setData(respone.data)
        })
    }

    return(
        <div>
            {
                data.map((data1)=>(
                    <div style={{margin:"20px"}}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                Task: {data1.name}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Added Time: {data1.time}
                                </Typography>
                                <Typography variant="body2">
                                DeadLine: {data1.deadLine}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={e => taskDelete(e,data1.id)}>DELETE</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))
            }
        </div>
    )
}
export default GetAll;