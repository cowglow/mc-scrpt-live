<?php


namespace Cowglow;


class SocialMedia
{
    public function __construct($params = null)
    {
        echo "<h1>Social Media</h1>";
        if (!empty($params)) {
            echo "<h2>-" . $params . "</h2>";
        }
    }
}