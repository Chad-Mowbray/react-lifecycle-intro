import './App.css';
import {Component, useEffect, useState} from 'react'
import Display from './components/Display';
import Dropdown from './components/Dropdown';

const App = () => {

  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState('no user yet...')

  const handleUserChange = (e) => {
    setCurrentUser(e.target.value)
  }

  useEffect( () => {

    async function fetchUsers() {
      console.log("App component mounted or currentUser changed...")
      const url = "https://jsonplaceholder.typicode.com/users"
      const response = await fetch(url)
      const responseJson = await response.json()
      const userNames = responseJson.map( userObj => userObj.name)
      setUsers(userNames)

    }
    fetchUsers()

  }, [])

  useEffect( () => {
    console.log("second useEffect called")
  })

  return(
    <div className="App">
    <h1>User Chooser</h1>
    <Display currentUser={currentUser}/>
    <Dropdown users={users} handleUserChange={handleUserChange}/>
  </div>
  )

}

export default App

// class App extends Component {

//   state = {
//     users: [],
//     currentUser: 'no user yet...'
//   }

  // handleUserChange = (e) => {
  //   this.setState( {currentUser: e.target.value} )
  // }

//   componentDidMount = async () => {
    // console.log("App component mounted...")
    // const url = "https://jsonplaceholder.typicode.com/users"
    // const response = await fetch(url)
    // console.log("response: ", response)
    // const responseJson = await response.json()
    // const userNames = responseJson.map( userObj => userObj.name)
//     this.setState({users: userNames})
//   }
  

//   render() {
//     return (
      // <div className="App">
      //   <h1>User Chooser</h1>
      //   <Display currentUser={this.state.currentUser}/>
      //   <Dropdown users={this.state.users} handleUserChange={this.handleUserChange}/>
      // </div>
//     );
//   }
// }

// export default App;