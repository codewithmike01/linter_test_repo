import React from "react";
import classes from "./Nav.module.css";
import Logo from "../../assets/images/nav_logo.svg";

const Nav = () => {
    return (
        <section className={classes.nav_container}>
            <nav className={classes.nav_container__wrapper}>
                <div className={classes.logo}>
                    <img
                        src={Logo}
                        alt="Apply for me Logo"
                        className={classes.logo__img}
                    />
                </div>

                <ul className={classes.nav_links}>
                    <li>About</li>
                </ul>
            </nav>
        </section>
    );
};

export default Nav;
