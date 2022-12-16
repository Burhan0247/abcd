import React from "react"
import { Card,CardContent,Grid } from "@mui/material"

export const Citylist=({data})=>{
    return(
        <React.Fragment>
            
            <Card>
                <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={4}>id</Grid>
                    <Grid item xs={4}>Name</Grid>
                    <Grid item xs={4}>Country id</Grid>
                    {
                        data &&
                        data.length > 0 &&
                        data.map((item)=>
                        <React.Fragment>
                            <Grid item xs={4}>{item.id}</Grid>
                            <Grid item xs={4}>{item.name}</Grid>
                            <Grid item xs={4}>{item.ctrId}</Grid>
                        </React.Fragment>
                        
                        
                        )
                    }
                
                    </Grid>
                </CardContent>
            </Card>
        

        </React.Fragment>
    )
}