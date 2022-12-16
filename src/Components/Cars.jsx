import React,{useState,useEffect} from "react"
import { Grid,Card,CardContent } from "@mui/material";
import axios from "axios";

export const Cars=()=>{
    const [data,setData]=useState([ ]);

    const getData=async ()=>{
        const result=await axios.get("http://localhost:5050/cars");
        setData(result.data)
    }
    useEffect(()=>{
        getData();

    },[ ])

    return(
      <React.Fragment>
        <Grid container spacing={3}>
            {
                data.map((item)=>
                <Grid item xs={3}>
                    <Card sx={{bgcolor:item.Color}}><CardContent>{item.Brand}-{item.Model}</CardContent></Card>
                </Grid>
                
                )
            }

        </Grid>

      </React.Fragment>
    );
 };