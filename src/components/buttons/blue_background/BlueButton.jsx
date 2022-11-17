import React from "react";
import classes from "./BlueButton.module.css";

const BlueButton = ({ text, width }) => {
    return (
        <button style={{ width: `${width}px` }} className={classes.btn}>
            {text}
        </button>
    );
};

export default BlueButton;
