import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import Logo from "../../assets/images/nav_logo.svg";
import BlueButton from "../buttons/blue_background/BlueButton";
import LightButton from "../buttons/light_button/LightButton";

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
                    <li>
                        <Link to="none">About us</Link>
                    </li>

                    <li>
                        <Link to="none">Pricing plan</Link>
                    </li>

                    <li>
                        <Link to="none">Blog</Link>
                    </li>
                    <li>
                        <Link to="none">FAQs</Link>
                    </li>
                    <li>
                        <Link to="none">Contact us</Link>
                    </li>
                </ul>

                <div className={classes.btn_container}>
                    <LightButton text="Sign in" width="127" />
                    <BlueButton text="Get started" width="156" />
                </div>
            </nav>
        </section>
    );
};

export default Nav;
