/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/users/login';
import Signup from './components/users/signup';
import ItemList from './components/items/itemList';
import ReserveList from './components/reservations/reserveList';
import SingleItem from './components/items/singleItemList';
import Form from './components/booking/form';
import Users from './components/users/users';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }
componentDidMount() {
  this.loginStatus()
}
loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})    
.then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
  
  render() {
    return (
      <div>
         <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/items' element={<ItemList/>}/>
            <Route exact path='/reserve' element={<ReserveList/>}/>
            <Route path='/items/:id' element={<SingleItem/>}/>
            <Route path='/users/:userId' element={<Users/>}/>
            <Route path='/items/:id/reservatonForm' element={<Form/>}/>
            {/* path: "/tasks/edit/:id",  */}
            {/* <Route path='/users' element={<Users/>} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;