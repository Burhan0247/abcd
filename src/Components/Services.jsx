import React,{useState,useEffect} from "react"
import axios from "axios"
import {Grid,Button,TextField,Card,CardContent} from "@mui/material"
import { Servicesitem } from "./Servicesitem"

export const Services = () => {
    const [data,setData]=useState([])
    const [origdata,setOrigdata]=useState([]);
    const [txt,setTxt]=useState("")


    const getData = async ()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/todos")
        setData(result.data)
        setOrigdata(result.data)
    }
     useEffect(()=>{
        getData();
     },[]);

     useEffect(()=>{
        const filtered=origdata.filter((item)=>item.completed.toUpperCase().includes(txt.toUpperCase()));
              setData(filtered); 
    },[txt])






    return(
        <React.Fragment>
            <Grid conatainer spacing={2} sx={{margin:5}}>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={0.5}>
                    <Card>
                        <CardContent sx={{bgcolor:"red",height:15}}>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}> <TextField  variant="outlined" fullWidth/> </Grid>
                <Grid item xs={2}> <Button variant="contained" sx={{height:50}} >completed</Button> </Grid>
                <Grid item xs={2}> <Button variant="contained" sx={{height:50}}>INcompleted</Button> </Grid>
                <Grid item xs={1.5}></Grid>
                </Grid>
                <br />
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {
                            data.map((item)=>{
                                return(
                                    <Servicesitem item={item} />
                                )
                            })
                        }

                    </Grid>


                </Grid>

            </Grid>
               

            </Grid>

            
        </React.Fragment>
    )
}

