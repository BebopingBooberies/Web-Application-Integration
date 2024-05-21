import React, {useState, useEffect} from "react";

/**
 * paper author data collecting
 *
 * This page is the child of all 6 track pages.
 * The main purpose is to collect the authors data for each paper, when the papers id is given.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 * @author Kelsey Andrews, John Rooksby
 */

function PaperAuthors(props){
    const [author, setAuthor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false);

    const getAuthors = () => {
        fetch("http://unn-w20017168.newnumyspace.co.uk/year3/assignment/api/authors?paper=" + props.data.paper_id)
            .then(
                (response) => response.json()
            )
            .then(
                (json) => {
                    setAuthor(json.data)
                    setLoading(false)
                }
            )
            .catch(
                (e) => {
                    console.log(e.message)
                }
            )
    };

    const AllAuthors = author.map(
        (value, key) => <span key={key}>
            {value.first_name} {value.middle_initial} {value.last_name} - {value.institution} - {value.city}, {value.state} {value.country}<br/>
        </span>
    )

    const visibleDetails = () => {
        getAuthors();
        setVisible(!visible)
    }

    return (
        <div onClick={visibleDetails}>
            <h2>{props.data.title}</h2>
            <h4>Click here for more info</h4>
            {visible && <div>
                <p>Abstract = {props.data.abstract}
                </p>
                <p><strong>Authors information:<br/> </strong>{AllAuthors}</p>
                {loading && <p>Loading...</p>}
            </div>}
        </div>
    )
}

export default PaperAuthors;