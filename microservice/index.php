<?php

/** Require once the Composer Autoload */
if ( file_exists( 'vendor/autoload.php' ) ) {
	require_once 'vendor/autoload.php';
}

$App = new Cowglow\Microservice\App();

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
	echo json_encode( $_POST );
} else {
	$message = $App->Initialize();
	echo json_encode( [ 'message' => $message ] );
}
