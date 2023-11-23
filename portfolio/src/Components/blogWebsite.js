import React from "react";
import Subheading from "./Subheading";
import DrawerAppBar from "./navbar";
import "../index.css";
import { Grid } from "@mui/material";
import ListItem from "./projectInfoList";

function BlogWebsite(){
    return(
        <div>
            <DrawerAppBar />
            <div className="project-container">
                <Subheading content="Daily Blogger(A Blog-Website)" />
                <div className="project-page-content">
                    <Grid container spacing={{xs: 2, md: 6}}>
                        <Grid item xs={12} sm={12} md={6}>
                            <p className="robotomonoFamily">Daily Blogger is a blogging website where the user can share their experiences and thoughts with other users. It provide user authentication
                                feature along with some more necessery features like commenting on a post. </p>
                            <a className="robotomonoFamily project-git-btn" href="https://github.com/nitindhiman01/CODSOFT">Open Project <i class="fa-brands fa-github"></i></a>
                        </Grid>
                        <Grid className="project-info-box" item xs={12} sm={12} md={6}>
                            <ul className="project-info-list">
                                <ListItem heading="Project Category :" content="Web Development" />
                                <ListItem heading="FrontEnd Technologies :" content="HTML, CSS and JavaScript" />
                                <ListItem heading="BackEnd Technologies :" content="Node.js, Passport.js and MongoDB" />
                            </ul>
                        </Grid>
                    </Grid>
                </div>
                <div className="project-img-box">
                    <img className="project-img" src={require("../res/work/Blog-Website/Register-page.jpg")} alt="Website view"></img>
                    <img className="project-img" src={require("../res/work/Blog-Website/login-page.jpg")} alt="Website view"></img>
                    <img className="project-img" src={require("../res/work/Blog-Website/Full-web.jpg")} alt="Website view"></img>
                    <img className="project-img" src={require("../res/work/Blog-Website/post-page.jpg")} alt="Website view"></img>
                </div>
            </div>
        </div>
    );
}

export default BlogWebsite;