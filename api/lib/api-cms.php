<?php

/**
 * Active Title
 * Appends 'DEV' to the <TITLE> string*
 * @param $isDev    bool
 * @param $label    string
 * @return string
 */
function ActiveTitle($isDev, $label)
{
    $title = '<title>';
    $title .= ($isDev ? 'DEV | ' : '') . $label;
    $title .= '</title>';
    return $title;
}

function BrowserAutoLoader()
{
    echo '<script>setInterval(function () { location.reload() }, 3000);</script>';
}