import React,{useState,useEffect} from "react"
import {Grid,Card,CardContent} from "@mui/material"
import axios from 'axios'

export const Branches=()=>{
    const [data,setData]=useState([])

    const getaData=async ()=>{
        const result=await axios.get("http://localhost:5050/branches")
        setData(result.data);
    }

    useEffect(()=>{
        getaData();
    },[]);


    return(
        <React.Fragment>
         <Grid container spacing={2}>
            
                {
                    data.map((item)=>(
                        <Grid item xs={3}>
                            <Card sx={{bgcolor:"aqua"}}>
                                <CardContent>
                                {item.Name},{item.City}                                
                                </CardContent></Card>
                        </Grid>
                    )
                    
                    )
                }
                
               

         </Grid>
        </React.Fragment>
    )
}