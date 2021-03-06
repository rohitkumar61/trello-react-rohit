import React, { Component } from "react";
import { Button } from "react-bootstrap";

class AddCheckList extends Component {

  getStyle = ()=>{
		return {
			background:'#f4f4f4',
			padding:'10px',
			borderBottom:'1px #ccc dotted',
			textDecoration: this.props.checked ? 'line-through':'none'
		}
	}
  render() {
    return (
      <div style ={this.getStyle()}>
        <ul className="list-group d-flex" style={{ position: "relative" }}>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
              id={this.props.id}
              onChange={() =>{
                this.props.onCheckList(this.props.id, !this.props.checked)
              }}
            
              checked={this.props.checkedItem}
              onClick={this.props.onCheck}
            />
            {this.props.item.name}
          </li>
          <Button
            variant="outline-secondary"
            onClick={() => this.props.onDelete(this.props.id)}
            style={{ position: "absolute", right: "0", top: "2px" }}
          >
            X
          </Button>{" "}
        </ul>
      </div>
    );
  }
}

export default AddCheckList;
