import React, { Component } from "react";
import { API_TOKEN, API_KEY } from "../services/projectServices";

import List from "./List";
import CreateList from "./CreateList";



class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
  }

  componentDidMount() {

    const url = `https://api.trello.com/1/boards/${this.props.match.params.id}/lists?key=${API_KEY}&token=${API_TOKEN}`;

    fetch(url, { method: "GET" })
      .then((res) => res.json())

      .then((json) => {
        this.setState({ listData: json });
      })
      .catch((err) => console.log(err));
  }

  //for posting data and creating list

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit working");
    console.log(this.state.name);

    this.props.onCreate(this.state.name);
    this.setState({
      name: "",
    });
  };

  handleCreateList = async (name) => {

    let url = `https://api.trello.com/1/lists/?name=${name}&idBoard=${this.props.match.params.id}&key=${API_KEY}&token=${API_TOKEN}`;

    const response = await fetch(url, { method: "POST" });

    const newList = await response.json();
    this.setState({
      listData: [...this.state.listData, newList],
    });
    console.log(newList);
  };


//for deleting data



handleDeleteList = async (listId)=>{
  console.log(listId)
  let url =`https://api.trello.com/1/lists/${listId}/closed?key=${API_KEY}&token=${API_TOKEN}&value=true`
  const deletedList = await fetch(url,{ method: 'PUT'})
  const archieveList =await deletedList.json()
 
  console.log(archieveList)
  if(archieveList.closed){
  this.setState({
    listData: this.state.listData.filter((list)=> list.id !== listId),
  })
}else{
  console.log("Problem during making PUT request")
}
}




  render() {
    const { id } = this.state.listData;

    return (
      <div className="d-flex m-2" style={{ overflowX: "auto", flex: "1" }}>
        {this.state.listData.map((list) => (
          <List list={list} key={list.id} onDelete ={()=>this.handleDeleteList(list.id)} />
        ))}

        <div>
          <CreateList
            key={this.state.listData.id}
            onCreate={this.handleCreateList}
          />
        </div>
      </div>
    );
  }
}

export default ListContainer;
