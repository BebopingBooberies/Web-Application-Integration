<?php

/**
 * Connect and interact with an SQLite database
 *
 * @author Kelsey Andrews w20017168, John Rooksby
 */
class Database
{
    private $dbConnection;

    public function __construct($dbName) {
        $this->setDbConnection($dbName);
    }

    private function setDbConnection($dbName) {
        $this->dbConnection = new PDO('sqlite:'.$dbName);
        $this->dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function executeSQL($sql, $params=[]) {
        $stmt = $this->dbConnection->prepare($sql);
        $stmt->execute($params);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}