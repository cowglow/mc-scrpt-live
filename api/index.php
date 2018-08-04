<?php

//if ($_SERVER['REQUEST_METHOD'] == 'POST') {
$rootPath = './data';
$resources = scandir($rootPath,SCANDIR_SORT_DESCENDING);

foreach ($resources as $resource){
//    $xmlData = get($resource);
//    if (file_exists($resource)){
        var_dump($xmlData);
//    }
}

die();
//$xmlOutput = new SimpleXMLElement('<SiteData />');

/**
 * TODO: Loop through the array to load the xml files
 * TODO: Create new Parent XML Object
 * TODO: Append loaded XML files to Parent XML Object
 * TODO: Convert Concatinated XML tree to JSON
 * TODO: OUTPUT;
 */
//foreach ($xmlData as $xml) {
//    $resource = './data/'.$xml.'-data.xml';
//    if (file_exists($resource)) {
//        $xmlContent = file_get_contents($resource);
//        $xmlNode = new SimpleXMLElement($xmlContent);
//
//        $xmlOutput->addChild($xmlNode->saveXML());
////        $node = $xmlNode->getElementsByTagName('SiteData')->item(0);
//
////        $xmlOutput->addChild($node, true);
//
////        $xmlOutput->appendChild();
//    }
//    echo '<br>-------<br>'.PHP_EOL;
//
//}
//    // iterate over 'item' elements of document 2
//    $items2 = $doc2->getElementsByTagName('item');
//    for ($i = 0; $i < $items2->length; $i ++) {
//        $item2 = $items2->item($i);
//
//        // import/copy item from document 2 to document 1
//        $item1 = $doc1->importNode($item2, true);
//
//        // append imported item to document 1 'res' element
//        $res1->appendChild($item1);
//
//    }

//        $xml       = new SimpleXMLElement($xmlString);
//        $output    = new SimpleXMLElement($xml->asXML());
//        include_once('partials/http-headers.php');

//        if ($output) {
//            echo json_encode($output);
//        } else {
//            echo json_encode(array('requestFail' => true));
//        }
//    } else {
//        echo json_encode(array('requestFail' => true));
//    }
//}

echo '<pre>';
print_r($xmlOutput);
echo '</pre>';
//}

//if ($_SERVER['REQUEST_METHOD'] == 'GET') {
//    include "partials/header.php";
//    include "partials/main.php";
//    include "partials/footer.php";
//}