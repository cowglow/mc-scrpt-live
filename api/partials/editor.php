<div class="row">
    <div class="col-xs-12">
        <div style="border:thin solid white">
            <a name="event"/>
            <h3>EVENT SNIPPET</h3>
            <form action="#event" method="get">
                <p>
                    <input class="form-control-lg btn-block" type="text" name="name"
                           value="<?php echo (isset($_GET['name'])) ? $_GET['name'] : ""; ?>"
                           placeholder="Event Title"/>
                </p>
                <p>
                    <input class="form-control-lg" type="text" name="date-month"
                           value="<?php echo (isset($_GET['date-month'])) ? $_GET['date-month'] : ""; ?>"
                           placeholder="MM"/>
                    <input class="form-control-lg" type="text" name="date-day"
                           value="<?php echo (isset($_GET['date-day'])) ? $_GET['date-day'] : ""; ?>"
                           placeholder="DD"/>
                    <input class="form-control-lg" type="text" name="date-year"
                           value="<?php echo (isset($_GET['date-year'])) ? $_GET['date-year'] : ""; ?>"
                           placeholder="YY"/>
                    <!--                    Timestamp: <a href="https://www.unixtimestamp.com/" target="_blank">https://www.unixtimestamp.com/</a>-->
                </p>
                <p>
                    <input class="form-control-lg btn-block" type="text" name="link"
                           value="<?php echo (isset($_GET['link'])) ? $_GET['link'] : ""; ?>" placeholder="Event Link"/>
                </p>
                <p>
                    <button class="form-control-lg btn btn-block" type="submit">GENERATE</button>
                </p>
            </form>
            <?php if (isset($_GET['name']) && $_GET['name'] !== '' &&
                      isset($_GET['date-month']) && $_GET['date-month'] !== '' &&
                      isset($_GET['date-day']) && $_GET['date-day'] !== '' &&
                      isset($_GET['date-year']) && $_GET['date-year'] !== '' &&
                      isset($_GET['link']) && $_GET['link'] !== ''
            ) {
                $months    = [
                    1  => 'January',
                    2  => 'February',
                    3  => 'March',
                    4  => 'April',
                    5  => 'May',
                    6  => 'June',
                    7  => 'July',
                    8  => 'August',
                    9  => 'September',
                    10 => 'October',
                    11 => 'November',
                    12 => 'Decemeber'
                ];
                $xml       = new SimpleXMLElement('<Event />');
                $dateStamp = new DateTimeImmutable($months[floor($_GET['date-month'])].' '.$_GET['date-day'].' 20'.$_GET['date-year']);
                $unixDate  = strtotime($dateStamp->getTimestamp());

                $snippet = array(
                    $_GET['name'] => "name",
                    $unixDate     => "date",
                    $_GET['link'] => "link",
                );
                array_walk_recursive($snippet, array($xml, 'addChild'));

//                $dom               = dom_import_simplexml($xml)->ownerDocument;
//                $dom->formatOutput = true;

                $xmlEvent = new DOMDocument();
                $xmlEvent->loadXML($xml->asXML());
//
                $fileName = '.'.DIRECTORY_SEPARATOR.'data'.DIRECTORY_SEPARATOR.'events-data.xml';
//
//                $xmlDoc = new DOMDocument();
//                $xmlDoc->load($fileName);
//
//                $node = $xmlDoc->appendChild($xmlEvent);
//
//                $xmlDoc->save($fileName);
//                print_r($xmlDoc);



                $xml = new DOMDocument("1.0", "UTF-8");
                $xml->preserveWhiteSpace = true;
                $xml->formatOutput = true;
                $xml->load($fileName);
                $xml->appendChild($xmlEvent);
                $xml->save($fileName);
//                $xmlEvent->save($fileName);
                ?>
                <div style="border:thin solid white">
                    <script>
                        // function Copy() {
                        //     $("#snippet").select();
                        //     document.execCommand('copy');
                        // }
                    </script>
                    <textarea id="snippet" class="form-control-lg btn-block text-left"
                    <!--                              rows="10">-->
                    <?php //echo $dom->saveXML($dom->documentElement); ?><!--</textarea>-->
                    <button class="form-control-lg btn btn-block" onclick="Copy()">Copy to Clipboard</button>
                </div>
            <?php } ?>
        </div>
    </div>
</div>
