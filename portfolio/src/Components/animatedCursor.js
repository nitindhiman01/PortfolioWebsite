import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";

function AnimatedCursor(){
    const [pointerPos, setPoointerPos] = useState({
        x: 0,
        y: 0
    });
    // const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const pointerMove = e => {
            setPoointerPos({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", pointerMove);

        return () => {
            window.removeEventListener("mousemove", pointerMove);
        }
    }, [])

    const variants = {
        default: {
            x: pointerPos.x,
            y: pointerPos.y
        },
        textHover: {
            height: 150,
            width: 150
        }
    }

    // const textAnimate = () => setCursorVariant("textHover");
    // const textNormal = () => setCursorVariant("default");

    return(
        <motion.div
            className="cursor"
            variants={variants}
            animate="default"
        >   
        </motion.div>
    );
}

export default AnimatedCursor;

