import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import {meal} from "../../constants/index";

import "./Intro.css";

function Intro(){
    const [playVideo,setPlayVideo]=React.useState(false);
    const vidRef=React.useRef();

    function playPause(){
        setPlayVideo(!playVideo);
        if(playVideo){
            vidRef.current.pause();
        } else{
            vidRef.current.play();
        }
    }

    return(
        <div className="app__video">
            <video 
            ref={vidRef}
            src={meal}
            controls={false}
            muted  />
            <div className="app__video-overlay flex__center">
                <div className="app__video-overlay_circle flex__center" onClick={playPause}>
                {playVideo ? (
                <BsPauseFill color="#fff" fontSize={30} />
                ) : (
                <BsFillPlayFill color="#fff" fontSize={30} />
                )}
                </div>
            </div>
        </div>
    )
}

export default Intro; 