import React from "react"
import styles from '../Header/Header.module.css'

import { 
    BrowserRouter as Router,
    Switch, 
    NavLink
} from "react-router-dom"

const Header = () => {
    return (
        <div className="container-header">
            <NavLink exact to="/">
                <img className="header" src="/assets/logo.PNG" alt="Logo"/>
            </NavLink>
            <ul className="ul-nav">
                <li className="li-nav">
                    <NavLink exact to="/" activeClassName={styles.activeLink}>Home</NavLink>
                    <NavLink exact to="/movies" activeClassName={styles.activeLink}>Movies</NavLink>
                    <div className="animation start-home"></div>
                </li>
            </ul>
        </div>
    )
}
export default Header