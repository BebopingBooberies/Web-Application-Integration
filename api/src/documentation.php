<?php
/**
 * Documentation Page
 *
 * document page contains api information
 *
 * This class will contain information about the web api and how the parameters work.
 * It will also hold an example link which is known to work.
 *
 * @author Kelsey Andrews w20017168, John Rooksby, Callum-OKane
 * @link https://support.glitch.com/t/adding-urls-to-json-objects/8683
 */
class Documentation extends Endpoint
{
    public function __construct() {
        $data = array(
            "student name" => "Kelsey Andrews",
            "student id" => "w20017168",
            "author endpoint" => "Authors endpoint allows the user to view actors. 
            To view authors of a specific paper, the parameter name is paper. 
            An example of this parameter working would be:",
            "author endpoint link" => "http://unn-w20017168.newnumyspace.co.uk/year3/assignment/api/authors?paper=64461",
            "papers endpoint" => "Papers endpoint allows the user to view papers.
            To view information about a specific paper, the parameter name is track.
            An example of this parameter working would be: ",
            "papers endpoint link" => "http://unn-w20017168.newnumyspace.co.uk/year3/assignment/api/papers?track=doctoral",
            "update endpoint" => "Update endpoint allows the user to change the status of any papers award through 
            entering the paper id and award type. they type can either be true or null. 
            An example of this endpoint working would be:",
            "update endpoint link" => "http://unn-w20017168.newnumyspace.co.uk/year3/assignment/api/papers?track=doctoral"
        );
        $this->setData( array(
            "length" => count($data),
            "message" => "Success",
            "data" => $data
        ));
    }
}