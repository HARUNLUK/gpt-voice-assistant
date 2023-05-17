"use client"
import { useEffect, useRef } from "react";
import "./style.css"

interface CircleProps {
    active?: boolean,
    onClick?: Function,
    disable?: boolean,
    turning?: boolean,
    pulse?:boolean,
}

export const Circle: React.FC<CircleProps> = ({ active, onClick, disable, turning, pulse }) => {
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        newCircle();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [circleRef]);


    function newCircle() {
        if (circleRef.current) {

            const newCircle = document.createElement('div');
            newCircle.classList.add("center");
            newCircle.classList.add("anim");

            newCircle.classList.add(active ? "center-blue" : "center-green");
            // newCircle.style.background = generateSoftHexColor() 

            circleRef.current.appendChild(newCircle);

            setTimeout(() => {
                if (newCircle) {
                    newCircle.remove();
                }
            }, 1000);
        }
    }

    return (
        <div className="w-full" onClick={() => { onClick && onClick(); }}>
            <div className={"circle-container " + (turning ? "turning" : " ") + (pulse ? "pulsing turning" : " ")} ref={circleRef}>
                <div className={disable ? "center center-red" : active ? "center center-blue" : "center center-green"}>

                </div>
                <div className={disable ? "point point-red" : active ? "point point-blue" : "point point-green"} />

            </div>
        </div >
    );
};