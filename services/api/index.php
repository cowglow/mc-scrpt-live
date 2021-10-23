<?php
//echo phpinfo();

require "vendor/autoload.php";
require "kirby/bootstrap.php";

echo (new Kirby([
    "roots" => [
        "index" => __DIR__,
    ],
    "debug" => true,
]))->render();
