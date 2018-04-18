<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>UPDATE Recent Performances</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P|Share+Tech+Mono"/>
    <link rel="stylesheet" href="assets/cyborg.min.css"/>
    <link rel="stylesheet" href="assets/ui.css">
    <style>
        div {
            /*border:thin solid red;*/
        }
    </style>
</head>
<body>
<!-- Page Header -->
<div class="container-fluid">
    <div class="row page-header">
        <div class="col-xs-12">
            <h1><?php if ($view != 'default') {
                    echo "<small>UPDATE</small><br>";
                };
                echo $headers[$view]; ?></h1>
        </div>
    </div>