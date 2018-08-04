<div class="row">
    <div class="col-xs-12">
        <div style="border:thin solid white">
            <a name="event" />
            <h3>EVENT SNIPPET</h3>
            <form action="#event" method="get">
                <p>
                    <input class="form-control-lg btn-block" type="text" name="name" value="<?php echo (isset($_GET['name'])) ? $_GET['name'] : ""; ?>" placeholder="Event Title" />
                </p>
                <p>
                    <input class="form-control-lg btn-block" type="text" name="date" value="<?php echo (isset($_GET['date'])) ? $_GET['date'] : ""; ?>" placeholder="Unix Timestamp" />
                    Timestamp: <a href="https://www.unixtimestamp.com/" target="_blank">https://www.unixtimestamp.com/</a>
                </p>
                <p>
                    <input class="form-control-lg btn-block" type="text" name="link" value="<?php echo (isset($_GET['link'])) ? $_GET['link'] : ""; ?>" placeholder="Event Link" />
                </p>
                <p>
                    <button class="form-control-lg btn btn-block" type="submit">GENERATE</button>
                </p>
            </form>
            <?php if (isset($_GET['name']) && $_GET['name'] !== '' &&
                isset($_GET['date']) && $_GET['date'] !== '' &&
                isset($_GET['link']) && $_GET['link'] !== ''
            ){
                $xml = new SimpleXMLElement('<Event />');
                $snippet = array(
                        $_GET['name'] => "name",
                        $_GET['date'] => "date",
                        $_GET['link'] => "link",
                );
                array_walk_recursive($snippet, array ($xml, 'addChild'));

                $dom = dom_import_simplexml($xml)->ownerDocument;
                $dom->formatOutput = true;
                ?>
            <div style="border:thin solid white">
                <script>
                    function Copy(){
                        $("#snippet").select();
                        document.execCommand('copy');
                    }
                </script>
                <textarea id="snippet" class="form-control-lg btn-block text-left" rows="10"><?php echo $dom->saveXML($dom->documentElement); ?></textarea>
                <button class="form-control-lg btn btn-block" onclick="Copy()">Copy to Clipboard</button>
            </div>
            <?php } ?>
        </div>
    </div>
</div>
