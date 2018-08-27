"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import React from "react";
const React = require("react");
const tree_menu_1 = require("../../DataStructure/Tree/tree-menu");
const tree_menu_component_1 = require("../../DataStructure/Tree/tree-menu-component");
class MenuBasic extends React.Component {
    render() {
        const array = [
            {
                id: 1,
                name: "Node1"
            },
            {
                id: 2,
                name: "Node12",
                parent: 1
            },
            {
                id: 3,
                name: "Node111",
                parent: 2
            },
            {
                id: 4,
                name: "Node13",
                parent: 1
            },
            {
                id: 5,
                name: "Node2"
            },
            {
                id: 6,
                name: "Node3",
                parent: 3
            }
        ];
        const treeMenu = new tree_menu_1.TreeMenu(array);
        const render = (node) => {
            return (React.createElement("li", null, " node.data.name "));
        };
        const root = Object.keys(treeMenu).reduce((acc, c) => {
            acc = acc + render(c);
            return acc;
        }, "");
        return (React.createElement("div", { id: "my-side-menu", className: "side-menu" }, tree_menu_component_1.TreeMenuComponent.simpleRender(treeMenu.arrRoot)));
    }
}
exports.default = MenuBasic;
