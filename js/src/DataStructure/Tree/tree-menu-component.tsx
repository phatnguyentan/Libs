import * as React from "react";
export class TreeMenuComponent extends React.Component {
  static simpleRender(nodes: any): any {
    if (Array.isArray(nodes)) {
      return (
        <ul>
          {nodes.map(n => {
            return TreeMenuComponent.simpleRender(n);
          })}
        </ul>
      );
    } else {
      const node = nodes;
      if (node.nodes && node.nodes.length > 0) {
        return (
          <li>
            {node.data.name}
            {TreeMenuComponent.simpleRender(node.nodes)}
          </li>
        );
      } else {
        return <li>{node.data.name} </li>;
      }
    }
  }
}
