<?php

/**
 * mc-scrpt-live
 *
 * @packages
 *  - Cowglow\Events
 *  - Cowglow\Content
 *  - Cowglow\SocialMedia
 *
 * @author     Philip Saa <cowglow@gmail.com> / @cowglow
 * @copyright  Copyright © 2019 Philip Saa <cowglow@gmail.com> / @cowglow
 * @license    http://opensource.org/licenses/MIT The MIT License (MIT)
 */

include './lib/autoloader.php';
include './lib/globals.php';
include './lib/api-cms.php';

?>

<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <?= ActiveTitle($GLOBALS['isDev'], 'MC.SCRPT.LIVE - API'); ?>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--    <link rel="manifest" href="site.webmanifest">-->
    <!--    <link rel="apple-touch-icon" href="icon.png">-->
    <!-- Place favicon.ico in the root directory -->

    <!--    <link rel="stylesheet" href="css/normalize.css">-->

    <meta name="theme-color" content="#fafafa">
</head>

<body>
<h1>MC SCRPT - EVENT API</h1>
<pre>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

//    $pathInfo = array_values(array_filter(explode('/', $_SERVER['PATH_INFO'])));

    print_r($_SERVER['REQUEST_URI']);
    /*

    $input = [
        "version" => $pathInfo[0],
        "method" => $pathInfo[1],
    ];

    if ($pathInfo[2]) {
        $input['param'] = $pathInfo[2];
    }

    if (count($pathInfo) > 3) {
        echo 'INVALID PATH: Check query';
    } else {
        echo '<pre>';

        if ($input['version'] !== 'v1') {
            return;
        }

        switch ($input['method']) {
            case "event":
                $Events = new Cowglow\Events();
                include "./inc/template/event-form.php";
                break;

            case "Content":
                $Content = new Cowglow\Content();
                include "./inc/template/content-form.php";
                break;

            case "SocialMedia":
                $SocialMedia = new Cowglow\SocialMedia();
                include "./inc/template/socialmedia-form.php";

                break;

            default:
                include './inc/template/default.php';

        }

        echo json_encode($input, JSON_PRETTY_PRINT);

        echo '</pre>';
    }
*/
}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
}

?>
</pre>

<?= BrowserAutoloader(); ?>
</body>
</html>