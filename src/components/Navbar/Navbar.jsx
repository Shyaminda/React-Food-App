import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images  from "../../constants/images";
import "./Navbar.css";

function NavBar(){
    const [togMenu,setTogMenu]=React.useState(false);

    // function toggleMenu(){
    //     setTogMenu(true);
    // }
    // function toggleMenu(){
    //     setTogMenu(false);
    // }
    function toggleMenu(){
        setTogMenu((prevState)=>!prevState);
    }

    function handleToggle(){
      return ( 
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
            fontSize={27}
            className="overlay__close"
            onClick={toggleMenu}
            />
            <ul className="app__navbar-smallscreen_links">
                <li>
                    <a href="#home"onClick={toggleMenu}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about"onClick={toggleMenu}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#menu"onClick={toggleMenu}>
                        Menu
                    </a>
                </li>
                <li>
                    <a href="#awards"onClick={toggleMenu}>
                        Awards
                    </a>
                </li>
                <li>
                    <a href="#contact"onClick={toggleMenu}>
                        Contact
                    </a>
                </li>
            </ul>
        </div>
      )  
        
    }

    return(
       //<Container fluid>
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.gericht} alt="app__logo" />
            </div>
            {/* <ul className="">
                <li className="">
                <a href="#home">Home</a>
                </li>
                <li className="">
                <a href="#about">About</a>
                </li>
                <li className="">
                <a href="#menu">Menu</a>
                </li>
                <li className="">
                <a href="#awards">Awards</a>
                </li>
                <li className="">
                <a href="#contact">Contact</a>
                </li>
            </ul> */}
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">
                Log In / Registration
                </a>
                <div />
                <a href="/" className="p__opensans">
                    Book Table
                </a>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu 
                color="#fff"
                fontSize={27}
                onClick={toggleMenu}
                />
                {togMenu && handleToggle()}

            </div>
        </nav>
       //</Container>
    )
    
};

export default NavBar;
