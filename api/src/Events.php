<?php


namespace Cowglow;


class Events
{
    static public $file = 'data/events-data.txt';
    static public $input = [];

    public function __construct($params = null)
    {
        self::$input = $params;
    }

    public function getParams()
    {
        $output = [];
        $events = null;

        if (file_exists(self::$file)) {
            $events = explode("----", file_get_contents(self::$file));

            foreach ($events as $event) {
                $eventDetails = array_filter(explode("\n", $event));

                $collection = [];

                foreach ($eventDetails as $detail) {
                    $details = explode(": ", $detail);
                    $collection[$details[0]] = $details[1];
                }
                array_push($output, $collection);
            }
        }

        return $output;
    }
}
