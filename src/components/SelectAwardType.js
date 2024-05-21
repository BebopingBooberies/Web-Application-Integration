import React from "react";

/**
 * Select award type function
 *
 * This is a simple select function. this allows the user to choose if they would like to see all papers,
 * papers that have "won an award" or papers that have "not won an award".
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 * @author Kelsey Andrews, John Rooksby
 */

function SelectAwardType(props) {

    const onChangeSelect = (event) => {props.handler(event.target.value)};

    return(

        <div>
            <p>award status: </p>
            <select value={props.selectAward} onChange={onChangeSelect}>
                <option value = "all">All</option>
                <option value = "true">Has won an Award </option>
                <option value = "false">Has not won an Award</option>
            </select>
        </div>
    )
}
export default SelectAwardType;