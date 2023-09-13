import React from 'react';
import SkillCard from './skillCard';


function SkillSection(){
    return(
        <div className='skill-section'>
            <div className='sub-headings'>
                <h2>My Prowess</h2>
            </div>
            <div className='skill-card-wrapper'>
                <SkillCard
                    softwareAnimation={true}
                    heading="Software Development"
                    quote="“Dare to dream big; your code can reshape the world!”"
                    contentLine1="Languages I speak : C++, Python"
                    contentLine2="Proficient in using both functional and OOP."
                />
                <SkillCard
                    frontendAnimation={true}
                    heading="Frontend Dev"
                    quote='"Better web experiences start with great front end design!"'
                    contentLine1="Proficient in using HTML, CSS, JavaScript, ReactJS, Bootstrap, Material UI Frameworks and Framer motion animation lib."
                />
                <SkillCard
                    backendAnimation={true}
                    heading="Backend Dev"
                    quote='"Make it work, make it right, make it fast.!"'
                    contentLine1="Skilled in making fully functional Secure web applications using NodeJS, ExpressJS, EJS, MongoDB, APIs."
                />
            </div>
            
        </div>
    );
}

export default SkillSection;