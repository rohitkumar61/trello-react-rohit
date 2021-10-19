import React from 'react'
import { ListGroup } from "react-bootstrap";
import { DropdownButton, Dropdown } from "react-bootstrap";

import CheckListModalContainer from "../CheckList/CheckListModalContainer";


class ListCards extends React.Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <ListGroup.Item className="m-2">
          <div style={{ margin: "13px" }}>{this.props.card.name}</div>
          <DropdownButton
            className="m-2"
            variant=""
            title=""
            id="input-group-dropdown-2"
            align="end"
            style={{
              right: "0px",
              top: "0px",
              textDecorationStyle: "none",
              position: "absolute",
              border: "none",
            }}
          >
            <Dropdown.Item onClick={this.props.onDelete} href="#">
              Delete Card
            </Dropdown.Item>
          </DropdownButton>

          <CheckListModalContainer cardData={this.props.card} />
        </ListGroup.Item>
      </div>
    );
  }
}

export default ListCards;
