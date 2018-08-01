<?php
/**
 * Created by PhpStorm.
 * User: cowglow
 * Date: 02/11/17
 * Time: 21:04
 */

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//    $resource = $_POST["xml"];
    $resource = "site";
    $filename = './data/' . $resource . '-data.xml';

    if (file_exists($filename)) {
        $xml = simplexml_load_file($filename);
        $output = new SimpleXMLElement($xml->asXML());

        include_once('partials/http-headers.php');

        if ($output) {
            echo json_encode($output);
        } else {
            echo json_encode(array('requestFail' => true));
        }
    } else {
        echo json_encode(array('requestFail' => true));
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    include "partials/header.php";
    include "partials/main.php";
    include "partials/footer.php";
}