import React, { Component } from "react";
import {Button} from 'react-bootstrap'
class AddCheckList extends Component {
  render() {
    return (
      <div>
        <ul className="list-group d-flex"  style ={{position:"relative"}}>
          <li className="list-group-item" >
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
			 
            />
            {this.props.item.name}
          </li>
		  <Button variant="outline-secondary" onClick={this.props.onDelete} style ={{position:"absolute", right:"0", top:"2px"}}>
             X
            </Button>{" "}
        </ul>
      </div>
    );
  }
}

export default AddCheckList;
