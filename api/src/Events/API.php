<?php


namespace Cowglow\Events;


class API
{
    public function __construct()
    {
    }

    public function Post()
    {
        // Headers
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header("Access-Control-Allow-Headers: X-Requested-With");

        // Parameters
        $params = array_filter(explode('/', parse_url(key($_GET), PHP_URL_PATH)));
        $data = json_decode(file_get_contents("php://input"));
        $controller = $params[1];
        $method     = empty($params[2]) ? 'all' : $params[2];

        // Output
        echo json_encode([
            'controller' => $controller,
            'method'     => $method,
            'params'     => $params,
            'data'       => $data
        ]);
    }

    public function Get()
    {
        require dirname(__DIR__,2).DIRECTORY_SEPARATOR.'public'.DIRECTORY_SEPARATOR.'index.php';
    }
}