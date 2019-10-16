import React from "react";

const Contact = ({label, link, text}) => {
    return (
        <span>
      <p className="text-justify">
        {text}{" "}
          <a href={link} target="_twitter">
          {label}
        </a>
      </p>
    </span>
    );
};

export default Contact;
