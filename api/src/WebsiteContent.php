<?php


namespace Cowglow;


class WebsiteContent
{
    public function __construct($params = null)
    {
        echo "<h1>Content</h1>";
        print_r($params);
        if (!empty($params)) {
            echo "<h2>-" . $params . "</h2>";
        }
    }
}