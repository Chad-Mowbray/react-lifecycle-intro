import { Component } from "react";


class Dropdown extends Component {

  createOptions = () => {
    return this.props.users.map( (username, i) => <option value={username} key={`${username}-${i}`}>{username}</option>)
  }


  render() {
    const {handleUserChange} = this.props

    return (
      <select onChange={handleUserChange}>
        {this.createOptions()}
      </select>
    )
  }
}

export default Dropdown