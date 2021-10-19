import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class BoardCard extends React.Component {
  render() {
    const { id, name, prefs } = this.props.board;

    return (
        <Link to={`/boards/${id}`}> 
        <div>
          <Card
            style={{
              width: "18rem",
              height: "7rem",
              margin: "20px",
              color: "white",
            }}
          >
            <Card.Body
              style={
                prefs.backgroundImage === null
                  ? { background: `${prefs.backgroundColor}` } || {
                      backgroundColor: `blue`,
                    }
                  : {
                      backgroundImage: `url(${prefs.backgroundImageScaled[3].url})`,
                    }
              }
            >
              <Card.Title>{name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Link>
    );
  }
}

export default BoardCard;
