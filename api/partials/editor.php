<?php
require 'inc/helper.php';

$eventName  = $_GET['name'] ?? '';
$eventMonth = isset($_GET['date-month']) ? floor($_GET['date-month']) : '';
$eventDay   = $_GET['date-day'] ?? '';
$eventYear  = $_GET['date-year'] ?? '';
$eventLink  = $_GET['link'] ?? '';

$fileName = '.'.DIRECTORY_SEPARATOR.'data'.DIRECTORY_SEPARATOR.'events-data.xml';
?>
<div class="row">
    <div class="col-xs-12">
        <div style="border:thin solid white">
            <a name="event"/>
            <h3>EVENT SNIPPET</h3>
            <form action="#event" method="get">
                <p>
                    <input class="form-control-lg btn-block" type="text" name="name" value="<?php echo $eventName; ?>"
                           placeholder="Event Title"/>
                </p>
                <p>
                    <input class="form-control-lg" type="text" name="date-month" value="<?php echo $eventMonth; ?>"
                           placeholder="MM"/>
                    <input class="form-control-lg" type="text" name="date-day" value="<?php echo $eventDay; ?>"
                           placeholder="DD"/>
                    <input class="form-control-lg" type="text" name="date-year" value="<?php echo $eventYear; ?>"
                           placeholder="YY"/>
                    <!--                    Timestamp: <a href="https://www.unixtimestamp.com/" target="_blank">https://www.unixtimestamp.com/</a>-->
                </p>
                <p>
                    <input class="form-control-lg btn-block" type="text" name="link" value="<?php echo $eventLink; ?>"
                           placeholder="Event Link"/>
                </p>
                <p>
                    <button class="form-control-lg btn btn-block" type="submit">GENERATE</button>
                </p>
            </form>
            <?php
            if (isset($_GET['name'], $_GET['date-month'], $_GET['date-day'], $_GET['date-year'], $_GET['link']) && $_GET['name'] !== '' && $_GET['date-month'] !== '' && $_GET['date-day'] !== '' && $_GET['date-year'] !== '' && $_GET['link'] !== '') {

                try {
                    $dateStamp = new DateTime('20'.$eventYear.'-'.$months[$eventMonth].'-'.$eventDay);
                    $dateStamp->setTimezone($dateTimezone);
                } catch (Exception $e) {
                    echo $e;
                }

                $unixDate = $dateStamp->getTimestamp();
                $snippet  = [
                    "name" => $eventName,
                    "date" => $unixDate,
                    "link" => $eventLink,
                ];

                /**
                 * New Event Node
                 */
                $xmlEvent               = new DOMDocument('1.0', 'ISO-8859-15');
                $xmlEvent->formatOutput = true;

                foreach ($snippet as $key => $value) {
                    $xmlNode              = new DOMElement($key);
                    $xmlNode->textContent = $value;
                    $xmlEvent->appendChild($xmlNode);
                }
                $xmlEvent->saveXML();

                /**
                 * Events XML
                 */
                $xmlDoc = new DOMDocument('1.0', 'ISO-8859-15');
                $xmlDoc->load($fileName);

                $EventsData = $xmlDoc->getElementsByTagName('EventData')->item(0);
                $EventsData->appendChild($xmlEvent);
                $xmlDoc->saveXML();

                echo '<pre>';
                var_dump($xmlDoc);
                echo '</pre>';

                ?>
                <div style="border:thin solid white">
                    <textarea id="snippet" class="form-control-lg btn-block text-left"
                              rows="10"><?php echo $dom->saveXML($dom->documentElement); ?></textarea>
                    <button class="form-control-lg btn btn-block" onclick="Copy()">Copy to Clipboard</button>
                </div>
            <?php } ?>
        </div>
    </div>
</div>
