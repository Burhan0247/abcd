import React from "react"
import {Button} from "@mui/material"
import { Link } from "react-router-dom"
import { Emp } from "./Emp"
import {Cars} from "./Cars"
import {Branches} from "./Branches"
import {Counter} from "./Counter"


export const Home=()=>{
    return(
        <React.Fragment>
            <h1>this is Home page of the website</h1>
            <br />
            <br />

            <Emp/>
            <br />
            <Cars/>
            <br />
            <Branches/>
            <br />
            <Link to="/Contact">

            <Button variant="contained">Go TO Contact</Button>
            </Link>
            <br />
            <br />
            <Counter/>
            <br />
            <Link to="/Help">
                <Button variant="contained">Go to Help..</Button>
            </Link>



        </React.Fragment>
    )
}