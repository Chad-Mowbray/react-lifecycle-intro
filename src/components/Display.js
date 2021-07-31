import {Component} from 'react'


class Display extends Component {

  render() {
    const {currentUser} = this.props
    return (
      <h2>Current User Name: {currentUser}</h2>
    )
  }
}

export default Display