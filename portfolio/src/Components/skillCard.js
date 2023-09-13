import React from "react";
import Lottie from 'lottie-react';
import SoftwareAnimation from '../res/animation_c.json';
import ReactAnimation from '../res/zDsF7xR01l.json';
import NodeAnimation from '../res/animation_node.json';

function SkillCard(props){
    return(
        <div className='skill-card'>
            {props.softwareAnimation && <Lottie className='skill-animation' animationData={SoftwareAnimation}></Lottie>}
            {props.frontendAnimation && <Lottie className='skill-animation' animationData={ReactAnimation}></Lottie>}
            {props.backendAnimation && <Lottie className='skill-animation' animationData={NodeAnimation}></Lottie>}
            <h2 className='skill-card-heading'>{props.heading}</h2>
            <div className='underline-custom'></div>
            <div className='skill-content quote'>
                <p><i>{props.quote}</i></p>
            </div>
            <div className='skill-content'>
                <p>{props.contentLine1}</p>
                <p>{props.contentLine2}</p>
            </div>
        </div>
    );
}

export default SkillCard;