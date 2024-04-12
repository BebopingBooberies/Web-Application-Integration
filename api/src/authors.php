<?php

/**
 * Authors endpoint
 *
 * This class sends a sql statement to the database, allowing the user to search by paper_id if needed.
 * if the results are successful, it will return the information about the actors relevant to the paper_id given
 *
 * @author Kelsey Andrews w20017168, John Rooksby
 */
class Authors extends Endpoint
{

    protected function initialiseSQL() {
        $sql = "SELECT author.author_id, author.first_name, author.middle_initial, author.last_name, institution, country, state, city
                FROM affiliation
                JOIN author on affiliation.author_id = author.author_id";
        $params = array();

        if (filter_has_var(INPUT_GET, 'paper')){
            $sql .= " WHERE paper_id = :paper";
            $params["paper"] = $_GET['paper'];
        }
        $this->setSQL($sql);
        $this->setSQLParams($params);
    }
}