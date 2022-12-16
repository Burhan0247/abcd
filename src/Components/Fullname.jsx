import React,{useState} from "react"
import { Grid,Button,TextField } from "@mui/material"
import axios from "axios";

export const Fullname=()=>{
    const [fname,setFname]=useState("")
    const [mname,setMname]=useState("")
    const [lname,setLname]=useState("")
    const [fullname,setFullname]=useState("");


    const handleFullname=async ()=>{
        const payload={fname,mname,lname};
        const result =await axios.post("http://localhost:4040/fullname",payload)
        console.log("===>",result);
        setFullname(result.data);        
    }



    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField label="First name" variant="outlined" fullWidth onChange={(e)=>setFname(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField label="middle name" variant="outlined" fullWidth onChange={(e)=>setMname(e.target.value)}/>
                </Grid>

                <Grid item xs={3}>
                    <TextField label="Last name" variant="outlined" fullWidth onChange={(e)=>setLname(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth sx={{height:50}}  onClick={handleFullname}>Submit</Button>
                </Grid>

                <Grid item xs={12}>
                    {fullname}
                </Grid>

            </Grid>

        </React.Fragment>
    )
}