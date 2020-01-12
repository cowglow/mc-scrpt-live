<?php

namespace Cowglow\Microservice;

use Cowglow\Microservice\Infrastructure\AbstractPort;

class App extends AbstractPort {

	public function Initialize(): string {
		return 'initialized';
	}
}
