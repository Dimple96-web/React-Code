import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Dimple96-web");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { login, url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h3>Location: {"Bangalore"}</h3>
        <h4>Git: {url}</h4>
      </div>
    );
  }
}

export default UserClass;
