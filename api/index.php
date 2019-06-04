<?php
// Require once the Composer Autoload
if (file_exists(dirname(__FILE__) . '/vendor/autoload.php')) {
    require_once dirname(__FILE__) . '/vendor/autoload.php';
}

$GLOBALS['isDev'] = ($_SERVER['SERVER_NAME'] === 'localhost');


function ActiveTitle()
{
    $title = '<title>';
    $title .= ($GLOBALS['isDev']) ? 'DEV | ' : '';
    $title .= 'MC SCRPT - API';
    $title .= '</title>';
    return $title;
}

?>

<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <?= ActiveTitle(); ?>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--    <link rel="manifest" href="site.webmanifest">-->
    <!--    <link rel="apple-touch-icon" href="icon.png">-->
    <!-- Place favicon.ico in the root directory -->

    <!--    <link rel="stylesheet" href="css/normalize.css">-->

    <meta name="theme-color" content="#fafafa">
</head>

<body>
<pre>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo "<pre>";

    $input = array_filter(explode('/', $_SERVER['PATH_INFO']));

    echo '<br>-----<br>';
    echo json_encode($_SERVER, JSON_PRETTY_PRINT);

    echo "</pre>";

    if (count($input) > 2) {
        echo 'INVALID PATH: Check query';
    }

}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//$Events = new Cowglow\Events();
}

?>
</pre>

<script>
    setInterval(function () {
        location.reload();
    }, 3000);
</script>
</body>
</html>