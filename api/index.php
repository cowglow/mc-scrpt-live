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

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $input = captureInput(array_values(array_filter(explode('/', $_SERVER['REQUEST_URI']))));

    echo '<pre>';
    print_r($input, JSON_PRETTY_PRINT);
    echo '</pre>';

    if (count($input['count']) > 3) {
        echo 'INVALID PATH: Check query';

    } else {

        if ($input['version'] === 'v1') {

            switch ($input['method']) {
                case "event":
                    $App = new Cowglow\Events($input['param']);

                    break;

                case "copy":
                    $App = new Cowglow\WebsiteContent($input['param']);

                    break;

                case "social-media":
                    $App = new Cowglow\SocialMedia($input['param']);

                    break;

                default:
                    echo 'DEAD END';
            }
        } elseif ($input['version'] === 'event') {
            echo 'Events';
            include "./inc/template/event-form.php";

            if (!empty($input['method'])) {
                echo "<h2>-" . $input['method'] . "</h2>";
            }

        } elseif ($input['version'] === 'copy') {
            echo 'Text Copy';
            include "./inc/template/content-form.php";

            if (!empty($input['method'])) {
                echo "<h2>-" . $input['method'] . "</h2>";
            }

        } elseif ($input['version'] === 'social-media') {
            echo 'Social Media';
            include "./inc/template/socialmedia-form.php";

            if (!empty($input['method'])) {
                echo "<h2>-" . $input['method'] . "</h2>";
            }

        } else {
            // Default
            include './inc/template/default.php';
        }
    }
}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
}
