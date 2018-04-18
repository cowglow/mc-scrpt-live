<?php
/**
 * Created by PhpStorm.
 * User: cowglow
 * Date: 02/11/17
 * Time: 21:04
 */

header("Access-Control-Allow-Origin: *");

$xml = simplexml_load_file('./data.xml');
$output = new SimpleXMLElement($xml->asXML());

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $output->addChild("requestFail", false);
    header("Content-Type:text/json");
    echo json_encode($output);
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    global $view, $header;
    $view = (isset($_GET['tab'])) ? $_GET['tab'] : "default";
    $headers = array(
        "default" => "CONTENT EDITOR",
        "events" => "RECENT EVENTS",
        "visual" => "IMAGES"
    );

    include "partials/header.php"; // uses: $view, $header
    include "partials/navigation.php";
    include "partials/footer.php";
}