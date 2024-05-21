import react,{useState, useEffect} from "react";
import { Buffer } from 'buffer';
import UpdateAwards from "./UpdateAwards";
import SearchPapers from "./SearchPapers";
import React from "react";

/**
 * Admin Page
 *
 * Admin page with user validation connection
 *
 * This page collects the username and password inputted by the user and checks it against the database.
 * The way this is done is through the connection to the authentication class.
 * If the user is signed in, a token will be made and stored locally, allowing access for the user to go through other links.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 * @author Kelsey Andrews, John Rooksby
 */

function AdminPage(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(
        () => {
            if (localStorage.getItem('token')) {
                props.handleAuthenticated(true)
            }
        }
        ,[])

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleClick = () => {
        const encodedString = Buffer.from(
            username + ":" + password
        ).toString('base64');

        fetch("http://unn-w20017168.newnumyspace.co.uk/year3/assignment/api/auth",
            {
                method: 'POST',
                headers: new Headers( { "Authorization": "Basic " +encodedString })
            }
        )
            .then(
                (response) => {
                    return response.json()
                }
            )
            .then(
                (json) => {
                    console.log(json);
                    if (json.message === "Successful") {
                        props.handleAuthenticated(true);
                        localStorage.setItem('token', json.data.token);
                    }
                }
            )
            .catch(
                (e) => {
                    console.log(e.message)
                }
            )
    }

    const handleSignOut = () => {
        props.handleAuthenticated(false);
        setPassword("");
        setUsername("");
        localStorage.removeItem('token')
    }

    const allpapers = props.papers.map(
        (value, key) => <section key={key}>
            <UpdateAwards paper={value}
                            handleUpdate={props.handleUpdate}/>
        </section>
    )

    return(
        <div>
            {props.authenticated && <div>
                <h2>Update language</h2>
                <input type="button" value="sign out" onClick={handleSignOut}/>
                {allpapers}
            </div>
            }
            {!props.authenticated && <div>
                <h2>Sign in</h2>

                <input
                    type="text"
                    placeholder ="username"
                    value={username}
                    onChange={handleUsername}
                />

                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={handlePassword}
                />

                <input
                    type="button"
                    value="submit"
                    onClick={handleClick}
                />
            </div>}
        </div>
    )
}
export default AdminPage;