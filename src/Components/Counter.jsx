import React,{useState} from "react"
import { Grid,Card,CardContent,TextField,Button } from "@mui/material"

export const Counter=()=>{
    const [count,setCount]=useState(0)
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={4}> <Button disabled={count>10} variant="contained" onClick={()=>setCount(count+1)}>+</Button> </Grid>
                <Grid item xs={4}><Card><CardContent>{count}</CardContent></Card></Grid>
                <Grid item xs={4}><Button disabled={count<0} variant="contained" onClick={()=>setCount(count-1)}>---</Button ></Grid>



            </Grid>
        </React.Fragment>
    )
}