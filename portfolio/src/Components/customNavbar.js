import { CssBaseline } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';

function CustomNavbar(){
    return(
        <div>
            <CssBaseline />
            <header>
                <nav>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Education">Education</a></li>
                        <li><a href="#Experience">Experience</a></li>
                        <li><a href="#Work">Work</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>

            </header>
        </div>
    ); 
}

export default CustomNavbar;