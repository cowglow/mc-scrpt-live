<?php
/**
 * Created by PhpStorm.
 * User: cowglow
 * Date: 02/11/17
 * Time: 21:04
 */

header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $xml = simplexml_load_file('./data.xml');
    $output = new SimpleXMLElement($xml->asXML());
    $output->addChild("requestFail", false);
    header("Content-Type:text/json");
    echo json_encode($output);
}