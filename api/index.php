<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    header('Content-Type: application/xml');
    $rootPath    = './data';
    $resources   = scandir($rootPath, SCANDIR_SORT_DESCENDING);
    $xmlResource = new SimpleXMLElement('<SiteDate></SiteDate>');

    foreach ($resources as $resource) {
        if ($resource != '..' && $resource != '.') {
            $xmlFile = $rootPath.'/'.$resource;
            if (file_exists($xmlFile)) {
                $xmlData    = file_get_contents($xmlFile);
                $xmlElement = new SimpleXMLElement($xmlData);
                $nodeName   = $xmlElement->getName();
                $nodeValue  = $xmlElement->children();
                $root       = $xmlResource->addChild($nodeName);

                foreach ($nodeValue as $node) {
                    $parent   = $root->addChild($node->getName());
                    $children = $node->children();

                    foreach ($children as $child) {
                        $parent->addChild($child->getName(), $child);
                    }
                }
            }
        }
    }

    echo $xmlResource->asXML();
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    include 'partials/header.php';

    if (!$_SERVER['HTTP_HOST'] == 'localhost') {
        include 'partials/editor.php';
    } else {
        include 'partials/error.php';
    }
    include 'partials/footer.php';
}