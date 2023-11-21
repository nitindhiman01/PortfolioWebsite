import React from "react";
import Subheading from "./Subheading";
import WorkCard from "./WorkCard";
import { Grid } from "@mui/material";
import WorkData from "../workData";

function WorkSection(){
    return(
        <div className="work-container">
            <Subheading content="My Work"/>
            <div>
                <Grid container spacing={{xs: 2, md: 3}}>
                    {WorkData.map((data) => (
                        <Grid className="work-grid-item" item xs={12} sm={6} md={4}>
                        <WorkCard 
                            projectName={data.projectName} 
                            projectCategory={data.projectCategory} 
                            imgURL={require("../res/work/blog-web.png")}
                            projectURL={data.projectURL}
                        />
                    </Grid>
                    )) }
                </Grid>
            </div>
        </div>
    );
}

export default WorkSection;
