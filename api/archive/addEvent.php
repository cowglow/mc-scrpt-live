<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type:text/json");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $now = time();

    /**
     * First Backup the last used file
     */
    $file = './data.xml';
    $file_copy = './data-' . $now . '.xml';
    chmod($file, 0777);
    copy($file, $file_copy);
    chmod($file_copy, 0777);

    /**
     * Create Modifications
     */
    // Original XML
    $xml = simplexml_load_file($file);
    $dom = new DomDocument;
    $events_node = $dom ->createElement('Events');

    // Add New Event
    $event_node = $dom->createElement("Event");
    $event_node->appendChild($dom->createElement("name", $_POST['name']));
    $event_node->appendChild($dom->createElement("date", $_POST['date']));
    $event_node->appendChild($dom->createElement("link", $_POST['link']));
    $events_node->appendChild($event_node);

    // Add Old Events
    $event_lists = $xml->xpath('//Event');
    foreach($event_lists as $event_item){
        $event_node = $dom->createElement("Event");
        $event_node->appendChild($dom->createElement("name", $event_item->name));
        $event_node->appendChild($dom->createElement("date", $event_item->date));
        $event_node->appendChild($dom->createElement("link", $event_item->link));
        $events_node->appendChild($event_node);
    }
    $dom->appendChild($events_node);
    unset($xml);

    // Combine Nodes
    $xml = new DOMDocument;
    $xml->load($file);
    $xpath = new DOMXpath($xml);
    $nodelist = $xpath->query('//Events');
    $oldnode = $nodelist->item(0);
    $newnode = $xml->importNode($dom->documentElement, true);
    $oldnode->parentNode->replaceChild($newnode, $oldnode);
    $xml_dom = new SimpleXMLElement($xml->saveXML());
    unset($dom);

    $dom = new DOMDocument('1.0');
    $dom->preserveWhiteSpace = false;
    $dom->formatOutput = true;
    $dom->loadXML($xml_dom->asXML());

    $xml_file = fopen($file, "w");
    fwrite($xml_file, $dom->saveXML());
    fclose($xml_file);

    echo json_encode(true);
}
