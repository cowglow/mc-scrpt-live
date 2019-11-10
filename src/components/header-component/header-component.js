import React from "react";

import logo from '../../images/logo-animation.gif'
import "./header-component.styles.css";

const HeaderComponent = ({ classes }) => {
    const logoAlt =
        "A terminal style cursor blinks as it spells out the words 'MC' and 'SCRIPT'. With no I in script.";

    return (
      <div>
            <img src={logo} className="Header-Content__Logo" alt={logoAlt}/>
        </div>
    );
};

export default HeaderComponent;
