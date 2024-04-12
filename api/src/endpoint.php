<?php

/**
 * A class for endpoints
 *
 * connects all api pages to the database,
 * gets any parameters into the sql statements and returns the results
 *
 * @author Kelsey Andrews w20017168, John Rooksby
 */
abstract class Endpoint
{
    private $data;
    private $sql;
    private $sqlParams;

    public function __construct() {

        $db = new Database("db/chiplay.sqlite");
        $this->initialiseSQL();
        $data = $db->executeSQL($this->sql, $this->sqlParams);

        $this->setData( array(
            "length" => count($data),
            "message" => "Success",
            "data" => $data
        ));
    }

    protected function setSQL($sql) {
        $this->sql = $sql;
    }

    protected function getSQL() {
        return $this->sql;
    }

    protected function setSQLParams($params) {
        $this->sqlParams = $params;
    }

    protected function getSQLParams() {
        return $this->sqlParams;
    }

    protected function initialiseSQL() {
        $sql = "";
        $this->setSQL($sql);
        $this->setSQLParams([]);
    }

    protected function setData($data) {
        $this->data = $data;
    }

    public function getData() {
        return $this->data;
    }
}