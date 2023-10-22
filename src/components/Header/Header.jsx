import React from "react";
import SubHeading from '../../container/SubHeading/SubHeading';
import { images } from "../../constants";
import "./Header.css";

const Header=()=>(
  
    <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
            <SubHeading title="Grab the new taste of food"/>
            <h1 className="app__header-h1">The key to the finest dining</h1>
            <p className="p__opensans" style={{margin: "2rem 0"}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
                mo rbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
            tellus</p>
            <button type="button" className="custom__button">Explore Menu</button>
        </div>
        <div className="app__wrapper_img">
            <img src={images.welcome} alt="header_img"/>
        </div>
    </div>
);

export default Header;