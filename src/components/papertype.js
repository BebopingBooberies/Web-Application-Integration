import styles from './Menu.module.css';
import { Outlet, Link } from "react-router-dom";
/**
 * Paper type Page
 *
 * This page shows all the papers which relate to the track Papertype.
 * This will allow the user to choose a track type.
 *
 * @author Kelsey Andrews, John Rooksby
 */

function Papertype() {
    return(

        <div className={styles.papertype}>
            <h1>Paper Type</h1>
            <br/>
            <ul>
                <li>
                    <Link to="/interactive">Interactivity</Link>
                </li>
                <li>
                    <Link to="/fullpapers">Full Papers</Link>
                </li>
                <li>
                    <Link to="/WiP">Work In Progress</Link>
                </li>
                <li>
                    <Link to="/competition">Competition</Link>
                </li>
                <li>
                    <Link to="/doctoral">Doctoral</Link>
                </li>
                <li>
                    <Link to="/rapid">Rapid</Link>
                </li>
            </ul>
        </div>
    )
}
export default Papertype;