import React,{useState} from "react"
import axios from "axios";
import { Grid,Card,CardContent,TextField,Button } from "@mui/material";
import { Citylist } from "./Citylist";


export const City=()=>{
    const [data,setData]=useState([]);
    const [txt,setTxt]=useState(1);

    const handleFind= async()=>{
        const payload ={
            ctrId: txt,
             };
        const result=await axios.post("http://localhost:3030/citiesbyfilt",payload);
           setData(result.data);
        }


    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={5}>Dropdown</Grid>
                <Grid item xs={5}> <TextField variant="outlined" fullWidth label="Search" on onChange={(e)=>setTxt(e.target.value)}/> </Grid>
                <Grid item xs={2}> <Button variant="contained" fullWidth onClick={handleFind}>Find</Button> </Grid>

                <Grid item xs={12}>
                <Citylist data={data.result} />
                </Grid>



            </Grid>

            

        </React.Fragment>
    );
};