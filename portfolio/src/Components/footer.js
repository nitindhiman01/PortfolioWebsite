import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';


function Footer(){
    return(
        <div id="Contact" className="footer">
            <hr className="horizontal-line"></hr>
            <h3 className="footerTitle">Available for freelancing.</h3>
            <h5 className="footerContent">Send me an E-mail or get in touch with me via message!</h5>
            <div className="icons">
                <a href="https://www.instagram.com/nitindhiman01/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/nitindhiman01"><i class="fa-brands fa-github"></i></a>
                <a href="https://twitter.com/nitindhiman01"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/nitin-dhiman-6a37b4210/"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://wa.me/8199038218"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="mailto:nitindhiman8773@gmail.com"><i class="fa-solid fa-envelope"></i></a>
            </div>
            <p>Handcrafted by Nitin Dhiman</p>
            <p><CopyrightIcon sx={{fontSize: "20px"}} /> 2023</p>
        </div>
    )
}

export default Footer;