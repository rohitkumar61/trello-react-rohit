import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class ListCards extends React.Component {
  render() {
let {id} =this.props
    return (
      <div>
        <ListGroup.Item className="m-2">{this.props.card.name}</ListGroup.Item>
      </div>
    );
  }
}

export default ListCards;


