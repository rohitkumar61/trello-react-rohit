import React, { Component } from "react";

class CheckList extends React.Component {
  render() {
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item">
            <input
              class="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
            />
            {this.props.checkListDetails.name}
          </li>
        </ul>
      </div>
    );
  }
}

export default CheckList;
