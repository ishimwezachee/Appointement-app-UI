// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navigation from './components/navBar';
// import Home from './components/Home';
// import Items from './components/items/itemList';
// import Reserves from './components/reservations/reserveList';

// const App = () => (
//   <BrowserRouter>
//     <Navigation />
//     <Routes>
//       <Route exact path="/" element={<Home />} />
//       <Route exact path="/Doctors" element={<Items />} />
//       <Route exact path="/reservations" element={<Reserves />} />
//     </Routes>
//   </BrowserRouter>
// );

// export default App;

/* eslint-disable */


import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  fetchLoginStatus  from './redux/action/loginStatus';

import NavBar from './components/navBar';
// import Home from './components/Home';
import ItemList from './components/items/itemList';
// import Error from './components/error';
import Signup from './components/users/signup';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchLoginStatus();
  }


render() {
  return (
    <div className="App">

<BrowserRouter>
   <NavBar />
     {/* {this.error() && <Error />} */}
    <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}
      <Route exact path="/Doctors" element={<ItemList />} />
      <Route exact path="/signup" element={<Signup />} />
      {/* <Route exact path="/signup" element={(props) => <Signup {...props} />} /> */}
    </Routes>
  </BrowserRouter>
    </div>
  );
}
}
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  fetchLoginStatus: () => { dispatch(fetchLoginStatus()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
