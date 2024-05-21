/**
 *  Update Awards Page
 *
 *  This page should update the award status of a paper.
 *  There is currently a 400 (bad Request) error that comes up when trying to post the null response.
 *  A success message comes up when clicking on the true response, but nothing changes within the database.
 *  This issue seems to only be occurring on this side and not the api side.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 * @author Kelsey Andrews, John Rooksby
 */
function UpdateAwards(props) {

    const handleSelect = (event) => {

        const formData = new FormData();
        formData.append('award', event.target.value);
        formData.append('paper_id', props.paper.papers);

        const token = localStorage.getItem('token');

        fetch("http://unn-w20017168.newnumyspace.co.uk/year3/assignment/api/update",
            {
                method: 'POST',
                headers: new Headers( { "Authorization": "Bearer " + token}),
                body: formData
            })
            .then(
                (response) => response.text()
            )
            .then(
                (json) => {
                    console.log(json)
                    props.handleUpdate();
                })
            .catch(
                (e) => {
                    console.log(e.message)
                })
    }

    const awardStatus = (award) => (
        ((award.award === null) && (handleSelect === "false"))
        || ((award.award === "true") && (handleSelect === "true"))
    );

    return (
        <div>
            {props.paper.title}
            <select value={props.paper.award} onChange={handleSelect}>
                <option value="true">Has won an award</option>
                <option value="false">Has not won an award</option>
            </select>
        </div>
    )
}
export default UpdateAwards;