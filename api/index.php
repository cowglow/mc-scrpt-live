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
    $input = array_values(array_filter(explode('/', $_SERVER['PATH_INFO'])));

    if (count($input) > 2) {
        echo 'INVALID PATH: Check query';
    } else {
        switch ($input[0]) {
            case "Events":
                $Events = new Cowglow\Events();
                break;

            case "Content":
                $Content = new Cowglow\Content();
                break;

            case "SocialMedia":
                $SocialMedia = new Cowglow\SocialMedia();
                break;

            default:
                echo json_encode(['working on it'], JSON_PRETTY_PRINT);
        }
    }

}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
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