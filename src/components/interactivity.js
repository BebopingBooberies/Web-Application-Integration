import React, {useState, useEffect} from "react";
import PaperAuthor from "./PaperAuthors";
import SelectAwardType from "./SelectAwardType";
import SearchPapers from "./SearchPapers";
/**
 * Rapid Page
 *
 * This page shows all the papers which relate to the track Interactivity.
 * There is a variable which checks to see if the award value of any paper is true or null or if the user would like to
 * display all the papers.
 *
 * @author Kelsey Andrews, John Rooksby
 */

function Interactivity(props) {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectAward, setSelectAward] = useState('all');

    const searchPapers = (value) => {
        const fulldetails = value.title + " " + value.abstract;
        return fulldetails.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const awardStatus = (value) => (
        ((value.award === null) && (selectAward === "false"))
        || ((value.award === "true") && (selectAward === "true"))
        || (selectAward === "all")
    );

    const interactivity = (value) => value.short_name === "Interactivity";

    const allPapers = props.papers.filter(searchPapers).filter(awardStatus).filter(interactivity).map(
        (value, key) => <section key={value.paper_id}>
            <PaperAuthor data={value}/>

        </section>
    )


    const handleSelectAward = (award) => {
        setSelectAward(award);
    }

    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    return(
        <div>
            <h1>Interactivity</h1>
            <SelectAwardType selectAward={selectAward}  handler={handleSelectAward}/>
            <SearchPapers searchTerm={searchTerm} handler={handleSearch}/>
            <br/>
            {props.loading && <p>Loading...</p>}
            {allPapers}
        </div>
    )
}
export default Interactivity;