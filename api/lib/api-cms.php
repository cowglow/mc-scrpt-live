<?php


$routes = [
    "/events/all"
];

/**
 * Active Title
 * Appends 'DEV' to the <TITLE> string*
 * @param $isDev    bool
 * @param $label    string
 * @return string
 */
function ActiveTitle($isDev, $label)
{
    return ($isDev ? 'DEV | ' : '') . $label;
}

function BrowserAutoLoader()
{
    echo '<script>setInterval(function () { location.reload() }, 3000);</script>';
}

function captureInput($pathInfo)
{
    $output = [
        "count" => count($pathInfo),
        "version" => $pathInfo[0],
        "method" => $pathInfo[1],
    ];

    if ($pathInfo[2]) {
        $output['param'] = $pathInfo[2];
    }

    return $output;
}

function StyleSheets()
{
    $styles = array_slice(scandir("inc/styles"), 2);
    $output = '';

    foreach ($styles as $style) {
        $output .= "<link rel=\"stylesheet\" href=\"./inc/styles/" . $style . "\">\n";
    }

    return $output;
}