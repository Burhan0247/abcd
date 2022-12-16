import React from "react"
import { Button } from "@mui/material"
import {Link} from "react-router-dom"
import { City } from "./City"
import { Countrylist } from "./Countrylist"


export const Help = () =>{
    return(
        <React.Fragment>
            <br /><br />
            <br />
            <br />
            
            <City/>
            
            
            
            <br />
            <br />
            <Countrylist/>
            <br />
            <br />
            <br />


            <h1>Help Availalbe here..</h1>



















            <br />
            <Link to="/Home">
            <Button variant="contained">Home</Button>
            </Link>
        </React.Fragment>
    )
}