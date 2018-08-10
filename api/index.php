<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
$rootPath  = './data';
$resources = scandir($rootPath, SCANDIR_SORT_DESCENDING);

$xmlDom = new SimpleXMLElement('<SiteDate></SiteDate>');
foreach ($resources as $resource) {

    if ($resource != '..' && $resource != '.') {
        $xmlFile = $rootPath.'/'.$resource;

        if (file_exists($xmlFile)) {
            $xmlData    = file_get_contents($xmlFile);
            $xmlElement = new SimpleXMLElement($xmlData);
            $nodeName   = $xmlElement->getName();
            $nodeValue  = $xmlElement->children();
            $root       = $xmlDom->addChild($nodeName);

            foreach ($nodeValue as $node) {
                $children = $node->children();

                if (count($children) > 0) {
                    $parent = $root->addChild($node->getName());
                    foreach ($children as $child) {
                        $parent->addChild($child->getName(), $child);
                    }
                } else {
                    $root->addChild($node->getName(), $node);
                }

            }
        }
    }
}

header('Content-Type: application/json');
$xml = simplexml_load_string($xmlDom->asXML());
echo json_encode($xml);
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    include 'partials/header.php';

    if ($_SERVER['HTTP_HOST'] == 'localhost') {
        include 'partials/editor.php';
    } else {
        include 'partials/error.php';
    }

    include 'partials/footer.php';
}
