// import React from "react";
import * as React from "react";
import { TreeMenu } from "../../DataStructure/Tree/tree-menu";
import { TreeMenuComponent } from "../../DataStructure/Tree/tree-menu-component";

class MenuBasic extends React.Component {
  render() {
    const array: any = [
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
    const treeMenu = new TreeMenu(array);
    const render = (node: any) => {
      return (
        <li> node.data.name </li>
        // if(node.nodes && node.nodes.length > 0) {

        // };
      );
    };
    const root = Object.keys(treeMenu).reduce((acc: any, c: any) => {
      acc = acc + render(c);
      return acc;
    }, "");

    return (
      <div id="my-side-menu" className="side-menu">
        {TreeMenuComponent.simpleRender(treeMenu.arrRoot)}
      </div>
    );
  }
}

export default MenuBasic;
