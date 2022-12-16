import React,{useState,useEffect} from "react"
import { Grid,Card,CardContent } from "@mui/material"
import axios from "axios"

export const Countrylist=()=>{
    const [data,setData]=useState([])

    const getdata=async()=>{
        const result=await axios.get("http://localhost:3030/countries");
        setData(result.data.result)
    }
    useEffect(()=>{
        getdata()

    },[])
    return(
        <React.Fragment>
            <Card><CardContent>
            <Grid container spacing={2}>
                <Grid item xs={6}>ID</Grid>
                <Grid item xs={6}>Country Name</Grid>
                {
                    data && data.map((item)=>
                    <React.Fragment>
                        <Grid item xs={6}>{item.id}</Grid>
                        <Grid item xs={6}>{item.name}</Grid>
                    </React.Fragment>


                    )
                }
            </Grid>
            </CardContent>
            </Card>
        </React.Fragment>
    )
}