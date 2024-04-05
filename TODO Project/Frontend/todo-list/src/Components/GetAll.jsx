import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GetAll = () => {
    let data = [{"id":"1","name":"Brush","Time":"Monday 8:80AM", "DeadLine": "Thursday 12:00PM"},{"id":"2","name":"Apply for Jobs","Time":"Monday 8:80AM", "DeadLine": "Everyday"}]
    return(
        <div>
            {
                data.map((data1)=>(
                    <div style={{margin:"20px"}}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Task: {data1.name}
                                </Typography>
                                <Typography variant="h5" component="div">
                                Added Time: {data1.Time}
                                </Typography>
                                <Typography variant="body2">
                                DeadLine:  2{data1.DeadLine}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))
            }
        </div>
    )
}
export default GetAll;