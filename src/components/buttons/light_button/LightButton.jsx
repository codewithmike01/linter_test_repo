import React from "react";
import classes from "./LightButton.module.css";
const LightButton = ({ text, width }) => {
    return (
        <button style={{ width: `${width}px` }} className={classes.btn}>
            {text}
        </button>
    );
};

export default LightButton;
