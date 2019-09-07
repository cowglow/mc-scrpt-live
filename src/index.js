/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

/** Imports */
import React from "react";
import ReactDOM from "react-dom";

/** Components */
import {default as RootComponent} from "./components/app/app";

/** Styles */
import "./assets/styles.css";

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RootComponent/>, document.getElementById("root"));
// registerServiceWorker();
