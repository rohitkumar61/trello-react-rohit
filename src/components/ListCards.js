import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

import {
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

class ListCards extends React.Component {
  render() {
   
    return (
      <div style={{ position: "relative" }}>
        <ListGroup.Item className="m-2">
          <div  style={{margin:"13px"}} >
            {this.props.card.name}
            {/* <Button variant="outline-danger" onClick ={this.props.onDelete}>Danger</Button>{' '} */}
          </div>
          <DropdownButton
            className="m-2"
            variant=""
            title=""
            id="input-group-dropdown-2"
            align="end"
            // ms-auto
            style={{
              right: "0px",
              top: "0px",
              textDecorationStyle: "none",
              position: "absolute",
              border: "none",
              // backgroundColor: "white",
            }}
          >
            <Dropdown.Item onClick={this.props.onDelete} href="#">
              Delete Card
            </Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </DropdownButton>
        </ListGroup.Item>
      </div>
    );
  }
}

export default ListCards;
