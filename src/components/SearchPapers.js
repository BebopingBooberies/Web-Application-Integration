import React from "react";

/**
 * search papers function
 *
 * this is a simple search function that works on all track papers.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 *
 * @author Kelsey Andrews, John Rooksby
 */
function SearchPapers(props) {

    const onChange = (event) => props.handler(event.target.value);

    return(
        <input value={props.searchTerm} onChange={onChange} />
    )
}
export default SearchPapers;