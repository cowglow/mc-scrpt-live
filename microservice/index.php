<?php

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
	echo json_encode( $_POST );
} else {
	echo json_encode( [ 'message' => 'Fatal Error' ] );
}
