import React from "react";

class Players extends React.Component {

  constructor() {
    super();
    this.state = {
      players: []
    } // this closes state
  } // this closes constructor
  componentDidMount() {
    console.log("It's working!");
    fetch("http://localhost:5000/api/players")
    .then(response => response.json())
    .then (result => {
      console.log(result);
    this.setState({players: result})})
  }

  render() {
    return(
      <div className="playerList">
        <h1>Players: </h1>
        {this.state.players.map((item => <p>{item.name}</p>))}
      </div>
    )
  }

} //this closes Player class

export default Players;