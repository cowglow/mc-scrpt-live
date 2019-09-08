import React from "react";

// Resources
import logo from "../../assets/images/logo-animation.gif";
import "./header-component.styles.css";

const HeaderComponent = () => {
    const logoAlt =
        "A terminal style cursor blinks as it spells out the words 'MC' and 'SCRIPT'. With no I in script.";

    return (
        <div className="Header-Content">
            <img src={logo} className="Header-Content__Logo" alt={logoAlt}/>
        </div>
    );
};

export default HeaderComponent;
