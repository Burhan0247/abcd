import React from "react"
import { Grid,Button,Card,CardContent,TextField } from "@mui/material";

export const Servicesitem=({item})=>{
    return(
        <React.Fragment>
            
            <Grid item xs={3}>
                <Card sx={{bgcolor:"peachpuff"}} >
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                ID:{item.id}
                                
                                 </Grid>
                             <Grid item xs={12}>
                                Title:{item.title}
                                </Grid>  
                                <Grid item xs={12}>
                                completed:{item.completed}
                                    </Grid>  
                        </Grid>

                    </CardContent>
                </Card>
                

            </Grid>
           
        </React.Fragment>

    );
};