import React, {useState} from "react"
import {Grid,Button} from "@mui/material"
import {Link} from "react-router-dom";

export const Nav=()=>{
    const [data,setData]=useState(["Home","Services","Contact","AboutUs","Help"])


    return(
    <React.Fragment>
        <Grid container spacing={2}>
            
               
                <Grid item xs={2}>
                    <Link to="/home"><Button>Home</Button> </Link>                   
                </Grid>

                <Grid item xs={2}>
                    <Link to="/services"><Button>Services</Button> </Link>                   
                </Grid>
                <Grid item xs={2}>
                    <Link to="/shopping"><Button>Shopping</Button> </Link>                   
                </Grid>
                <Grid item xs={2}>
                    <Link to="/contact"><Button>Contact</Button> </Link>                   
                </Grid>
                <Grid item xs={2}>
                    <Link to="/aboutus"><Button>AboutUs</Button> </Link>                   
                </Grid>
                <Grid item xs={2}>
                    <Link to="/help"><Button>Help</Button> </Link>                   
                </Grid>


                
            

        </Grid>-
    </React.Fragment>
    
        )
}