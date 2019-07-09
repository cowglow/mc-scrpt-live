<?php

/** Require once the Composer Autoload */
if (file_exists('../vendor/autoload.php')) {
    require_once '../vendor/autoload.php';
}

/** @var bool $isDev */
$isDev = (strpos($_SERVER['HTTP_HOST'], 'localhost') !== false);
//$isDev = false;

if ($isDev) {
    ini_set('display_errors', 1);
    error_reporting(E_ALL ^ E_NOTICE);
}

$API = new \Cowglow\Events\API();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $API->Post();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $API->Get();
}