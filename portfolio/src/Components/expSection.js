import React from "react";
import Subheading from "./Subheading";
import { Box } from "@mui/material";
import MediaControlCard from "./expCard";


function ExperienceSection(){
    return(
        <div className="experience-section">
            <Subheading content="My Experiences" />
            <Box display="grid" gap={2} sx={{justifyContent: "center"}}>
                <MediaControlCard 
                    location="Remote"
                    position="Web Dev intern"
                    organization="CodSoft"
                    startYear="2023"
                    content="Added some more features to the 'Blog-Website project' under the guidance of CodSoft
                            using technologies like Node.js, MongoDB, HTML and CSS."
                />
            </Box>

        </div>
    );
}

export default ExperienceSection;