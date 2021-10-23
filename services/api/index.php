<?php
//echo phpinfo();

require __DIR__ . "/vendor/autoload.php";
require __DIR__ . "kirby/bootstrap.php";

echo (new Kirby([
    "roots" => [
        "index" => __DIR__,
    ],
    "debug" => true,
]))->render();
