<?php
/**
 * Base endpoint
 *
 * base page containing key data
 *
 * This class will print out information about the conference,
 * creator and contains a link to the app connected with the api side
 *
 * @author Kelsey Andrews w20017168, John Rooksby, Callum-OKane
 * @link https://support.glitch.com/t/adding-urls-to-json-objects/8683
 */
class Base extends Endpoint
{
    public function __construct() {
        $data = array(
            "student-name" => "Kelsey Andrews",
            "student-id" => "w20017168",
            "link" => "http://unn-w20017168.newnumyspace.co.uk/year3/assignment/api/documentation",
            "conference name" => "CHI PLAY '21: 
            The Annual Symposium on Computer-Human Interaction in Play"
        );
        $this->setData( array(
            "length" => count($data),
            "message" => "Success",
            "data" => $data
        ));
    }
}
