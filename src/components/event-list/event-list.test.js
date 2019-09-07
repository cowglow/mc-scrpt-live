import React from "react";
import ReactDOM from "react-dom";
import EventList from "./event-list";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EventList/>, div);
});
