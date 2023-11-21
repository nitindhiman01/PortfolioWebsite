import React from "react";
import Subheading from "./Subheading";
import DrawerAppBar from "./navbar";

function BlogWebsite(){
    return(
        <div>
            <DrawerAppBar />
            <Subheading content="Blog-Website" />
        </div>
    );
}

export default BlogWebsite;