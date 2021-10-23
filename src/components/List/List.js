import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

import * as TrelloApi from "./../../services/api";
import ListCards from "./ListCards";
import CreateCards from "./CreateCards";
import { fetchCardsAction } from "../../actions/cardActions";

class List extends React.Component {
 
  componentDidMount() {
    this.props.fetchCardsAction(this.props.list.id);
  }

  //creating card

  handleCreateCard = async (cardName) => {
    let newCard = await TrelloApi.addCard(this.props.list.id, cardName);
    this.setState({
      cardData: [...this.state.cardData, newCard],
    });
  };

  // handleDeleteCard = async (cardId) => {
  //   const deletedCardResponse = await TrelloApi.deleteCard(cardId);

  //   this.setState({
  //     cardData: this.state.cardData.filter((card) => card.id !== cardId),
  //   });
  // };

  render() {
    return (
      <div>
        <div
          className="card text-dark bg-light mb-3 m-4"
          style={{ minWidth: "18rem", maxWidth: "18rem", display: "flex" }}
        >
          <div className="card-header">
            {this.props.list.name}

            <DropdownButton
              variant="outline-secondary"
              title=""
              id="input-group-dropdown-2"
              align="end"
              style={{
                marginLeft: "220px",
                marginTop: "-30px",
                textDecorationStyle: "none",
              }}
            >
              <Dropdown.Item onClick={this.props.onDelete} href="#">
                Archieve list
              </Dropdown.Item>
            </DropdownButton>
          </div>

          <div className="card-body">
            {this.props.cards.map((card) => {
              return (
                <ListCards
                  key={card.id}
                  card={card}
                  onDelete={() => this.handleDeleteCard(card.id)}
                />
              );
            })}
            <CreateCards
              key={this.props.cards.id}
              onCreate={this.handleCreateCard}
            />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>({
  cards: state.cards.cards
})

export default connect(mapStateToProps,{fetchCardsAction}) (List);
