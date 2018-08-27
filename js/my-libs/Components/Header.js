"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import React from "react";
const React = require("react");
class Header extends React.Component {
    render() {
        return (React.createElement("div", { className: "shopping-list" },
            React.createElement("ul", null,
                React.createElement("li", null, "Instagram"),
                React.createElement("li", null, "WhatsApp"),
                React.createElement("li", null, "Oculus"))));
    }
}
exports.default = Header;
