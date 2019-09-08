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
import App from "./components/app/app";

/** Styles */
import "./assets/styles.css";

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById("root"));
// registerServiceWorker();
