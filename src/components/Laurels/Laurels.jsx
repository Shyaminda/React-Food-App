import React from "react";
import SubHeading from "../../container/SubHeading/SubHeading";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard=({imgUrl,title,subtitle})=>(
    <div className="app__laurels_awards-card">
        <img src={imgUrl} alt="awards"/>
        <div className="app__laurels_awards-card_content">
            <p className="p__cormorant" style={{color: "#DCCA87"}}>
                {title}
            </p>
            <p className="p__cormorant">
                {subtitle}
            </p>
        </div>
    </div>
);

function AWard(award){
    return(
        <AwardCard 
        key={award.title}
        imgUrl={award.imgUrl}
        title={award.title}
        subtitle={award.subtitle} />
    )
}

const Laurels=()=>(
    <div className="app__bg app__wrapper section__padding" id="awards">
        <div className="app__wrapper_info">
            <SubHeading title="Awards & recognition"/>
            <h1 className="">Our Laurels</h1>
            <div className="app__laurels_awards">
                {data.awards.map(AWard)}
            </div>
        </div>
        <div className="app__wrapper_img">
            <img src={images.laurels} alt="laurels_img"/>
        </div>
    </div>
);
export default Laurels;