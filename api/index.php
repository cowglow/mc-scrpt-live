<?php

//if ($_SERVER['REQUEST_METHOD'] == 'POST') {
$resource = (isset($_GET['xml'])) ? $_GET['xml'] : 'events';
$filename = './data/'.$resource.'-data.xml';

if (file_exists($filename)) {
    $xmlString = file_get_contents($filename);
    $xml       = new SimpleXMLElement($xmlString);
    $output    = new SimpleXMLElement($xml->asXML());
    include_once('partials/http-headers.php');

    if ($output) {
        echo json_encode($output);
    } else {
        echo json_encode(array('requestFail' => true));
    }
} else {
    echo json_encode(array('requestFail' => true));
}
//}

//if ($_SERVER['REQUEST_METHOD'] == 'GET') {
//    include "partials/header.php";
//    include "partials/main.php";
//    include "partials/footer.php";
//}