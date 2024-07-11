import "./App.css";
import { Component } from "react";
import axios from "axios";


class App extends Component {
  state = {
    users: [],
    isLoading: true,
  };

  componentDidMount() {
    //setTimeout(() => {
      //fetch("https://jsonplaceholder.typicode.com/users")
      //   .then((data) => data.json())
      //   .then((datas) => {
      //console.log(datas)

      //     this.setState({
      //       users: datas,
      //       isLoading:false
      //     });
      //   });
   // }, 5000);
   setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.data)
        .then((datas) => {
          console.log(datas);

          this.setState({
            users: datas,
            isLoading: false,
          });
        });
    },3000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">,
      
        <h1>Users</h1>
        {isLoading ? "Loading" : ""}
        {this.state.users.map((user) => (
          <div key={user.id}>
            {user.name} - {user.username}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
