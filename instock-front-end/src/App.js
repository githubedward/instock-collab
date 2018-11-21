import React, { Component } from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, withRouter, Switch, Redirect} from 'react-router-dom';
// import warehouseList from './Components/warehouseList';
import InventoryList from './Components/AllInventoryList';
// import warehouse from './Components/warehouse';
// import inventory from './Components/inventory';
// import users from './Components/users';
// import user from './Components/user';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Router>
          <div>
            <Nav />
            <Switch>
              <div className='main'>
                <Route path='/warehouseList' component = { warehouseList }/>
                <Route path='/inventoryList' component = { inventoryList }/>
                <Route path='/warehouses/:id' component = { warehouse } />
                <Route path='/inventory/:id' component = { inventory } />
                <Route path='/users' component = { users } />
                <Route path='/users/id' component = { user }/>
              </div>
            </Switch>
          </div>
        </Router> */}
        <InventoryList />
      </div>
    );
  }
}

export default App;
