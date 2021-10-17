import React, { Component } from "react";
import { API_TOKEN, API_KEY } from "../services/projectServices";

import ListCards from "./ListCards";
import CreateCards from "./CreateCards";

class List extends React.Component {
  constructor(props) {
    super(props);
    const { id, name } = this.props;
    this.state = {
      cardData: [],
    };
  }

  componentDidMount() {
    const url = `https://api.trello.com/1/lists/${this.props.list.id}/cards?key=${API_KEY}&token=${API_TOKEN}`;

    fetch(url, { method: "GET" })
      .then((res) => res.json())

      .then((json) => {
        this.setState({ cardData: json });
      })
      .catch((err) => console.log(err));
  }

  //for posting card data and creating card

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
   
    console.log(this.state.name);

    this.props.onCreate(this.state.name);
    this.setState({
      name: "",
    });
  };

  handleCreateCard = async (name) => {
    let url = `https://api.trello.com/1/cards?key=${API_KEY}&token=${API_TOKEN}&name=${name}&idList=${this.props.list.id}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    });

    const newCard = await response.json();
    this.setState({
      cardData: [...this.state.cardData, newCard],
    });
    console.log(newCard);
  };

  render() {
    return (
      <div>
        <div
          className="card text-dark bg-light mb-3 m-4"
          style={{ minWidth: "18rem", maxWidth: "18rem" }}
        >
          <div className="card-header">{this.props.list.name}</div>
          <div className="card-body">
            {this.state.cardData.map((card) => {
              return <ListCards key={card.id} card={card} />;
            })}
            <CreateCards
              key={this.state.cardData.id}
              onCreate={this.handleCreateCard}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default List;
