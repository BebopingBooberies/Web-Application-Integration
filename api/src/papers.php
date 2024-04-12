<?php

/**
 * Papers endpoint
 *
 * @author Kelsey Andrews w20017168, John Rooksby
 */
class Papers extends Endpoint
{
    protected function initialiseSQL() {
        $sql = "SELECT paper_id, title, award, abstract, name, short_name, video
                FROM paper 
                JOIN track on track.track_id = paper.track_id";
        $params = array();

        if (filter_has_var(INPUT_GET, 'track')){
            $sql .= " WHERE short_name = :track";
            $params["track"] = $_GET['track'];
        }
        $this->setSQL($sql);
        $this->setSQLParams($params);
    }
}