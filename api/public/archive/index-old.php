<?php
/**
 * Created by PhpStorm.
 * User: cowglow
 * Date: 02/11/17
 * Time: 21:04
 */

header("Access-Control-Allow-Origin: *");

$xml = simplexml_load_file('./data/data.xml');
$output = new SimpleXMLElement($xml->asXML());

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $output->addChild("requestFail", false);
    header("Content-Type:text/json");
    echo json_encode($output);
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    ?>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>UPDATE Recent Performances</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P|Share+Tech+Mono"/>
        <link rel="stylesheet" href="../assets/cyborg.min.css"/>
        <link rel="stylesheet" href="../assets/ui.css">
        <style>
            div {
                /*border:thin solid red;*/
            }
        </style>
    </head>
    <body><?php
    $view = (isset($_GET['tab'])) ? $_GET['tab'] : "default";

    $headers = array(
        "default" => "CONTENT EDITOR",
        "events" => "RECENT EVENTS",
        "visual" => "IMAGES"
    );

    echo "<code>" . $view . "</code>";
    ?>
    <div class="container">
        <!-- Page Navigation -->
        <ul>
            <?php foreach ($headers as $key => $value) { ?>
                <li style="text-transform:uppercase;">
                    <a class="<?php if ($key === $view) { echo "active"; }; ?>" href="?tab=<?php echo $key; ?>"><?php echo $key; ?></a>
                </li>
            <?php } ?>
        </ul>

        <!-- Page Header -->
        <div class="row page-header">
            <div class="col-xs-12">
                <h1><?php if ($view != 'default') {
                    echo "<small>UPDATE</small><br>";
                };
                echo $headers[$view]; ?></h1>
            </div>
        </div>


        <div class="row">
            <?php if ($view === "default") { ?>
                <div class="col-md-12 col-xs-12">
                    <pre>
                        <h5>Content Stored in XML format</h5>
                    </pre>
                </div>
            <?php }; ?>

            <?php if ($view === "images") { ?>
                <div class="col-md-12 col-xs-12">
                </div>
            <?php }; ?>

            <?php if ($view === "events") { ?>
                <!-- ADD EVENT -->
                <div class="col-md-6 col-xs-6">
                    <h3>ADD EVENT</h3>
                    <form method="post">
                        <div class="form-group">
                            <label class="control-label requiredField" for="event_name">event.name <span
                                        class="asteriskField text-danger"> * </span></label>
                            <input class="form-control" id="event_name" name="event_name" type="text"/>
                        </div>
                        <div class="form-group" data-provide="datepicker">
                            <label class="control-label requiredField" for="event_date">event.date <span
                                        class="asteriskField text-danger"> * </span></label>
                            <input class="form-control" id="event_date" name="event_date" placeholder="D Month YYYY"
                                   type="date">
                            <div class="input-group-addon">
                                <span class="glyphicon glyphicon-th"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label requiredField" for="event_link">event.link <span
                                        class="asteriskField text-danger"> * </span></label>
                            <input class="form-control" id="event_link" name="event_link" type="text"/>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-lg btn-block btn-primary" name="submit" type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>

                <!-- VIEW SOURCE -->
                <div class="col-md-6 col-xs-6">
                    <h3>SOURCE</h3>
                    <pre style="color:#2A9FD6"><?php
                        $events = $output->xpath('//Event');
                        foreach ($events as $event) {
                            echo json_encode($event, JSON_PRETTY_PRINT);
                        }
                        ?></pre>
                </div>
            <?php }; ?>
        </div>

    </div>
    <script src="../assets/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script>
        $('form').submit(function (e) {
            e.preventDefault();
            if (this.event_name.value != "" && this.event_date.value != "" && this.event_link.value != "") {
                $.ajax({
                    type: "POST",
                    url: "addEvent.php",
                    data: $.param({
                        name: this.event_name.value,
                        date: parseInt((new Date(this.event_date.value).getTime() / 1000).toFixed(0)),
                        link: this.event_link.value
                    })
                }).done(function (data) {
                    if (data) {
                        location.reload();
                    }
                })
            }
        });
    </script>
    </body>
    </html>
    <?php
}