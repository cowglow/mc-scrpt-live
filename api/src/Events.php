<?php


namespace Cowglow;


use DateTime;

class Events
{
    static public $file = 'data/events-data.txt';
    static public $input = [];
    static public $output = [];

    public function __construct($params = null)
    {
        self::$input = $params;
    }

    public function output()
    {
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
                array_push(self::$output, $collection);
            }

        }

        return self::response();
    }

    public function response()
    {
        switch (self::$input) {
            case "all":
                return self::getAll();
                break;
            case "upcoming":
                return self::upComing();
                break;
            case "previous":
                return self::previousEvents();
                break;
            case "first":
                return self::firstEvent();
                break;
            case "last":
                return self::lastEvent();
                break;
            default:
                return self::previousEvents();
        }
    }

    public function getAll()
    {
        return self::$output;
    }

    public function upComing()
    {
        $filteredOutput = [];
        $currentTimeStamp = new DateTime();
        foreach (self::$output as $event) {
            if ($event['date'] >= $currentTimeStamp->getTimestamp()) {
                array_push($filteredOutput, $event);
            }
        }

        return $filteredOutput;
    }

    public function previousEvents()
    {
        $filteredOutput = [];
        $currentTimeStamp = new DateTime();
        foreach (self::$output as $event) {
            if ($event['date'] < $currentTimeStamp->getTimestamp()) {
                array_push($filteredOutput, $event);
            }
        }

        return $filteredOutput;
    }

    public function firstEvent()
    {
        return self::$output[count(self::$output) - 1];
    }

    public function lastEvent()
    {
        $pastEvents = self::previousEvents();
        return $pastEvents[0];
    }
}
