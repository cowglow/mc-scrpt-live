/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

import * as registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker.register()
