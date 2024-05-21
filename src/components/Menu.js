import styles from './Menu.module.css';
import {Link} from "react-router-dom";

/**
 * Main Menu
 *
 * This will be the main navigation component in the app,
 * with all links to all main pages
 *
 * @author Kelsey Andrews, John Rooksby
 */

function Menu() {
    return (
        <div className={styles.menu}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/paper-type">Papers</Link></li>
                <li><Link to="/admin">Admin</Link></li>
            </ul>
        </div>
    )
}

export default Menu;