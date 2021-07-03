<?php
//echo phpinfo();

require "vendor/autoload.php";

echo (new Kirby\Cms\App([
    "roots" => [
        "index" => __DIR__ . "/src",
    ],
]))->render();
