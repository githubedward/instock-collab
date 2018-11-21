import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {BrowserRouter as Router, Route, withRouter, Switch, Redirect} from 'react-router-dom';
import WarehouseList from './Components/warehouseList';
import InventoryList from './Components/AllInventoryList';
import Warehouse from './Components/warehouseList';
import Inventory from './Components/inventory';
import Users from './Components/users';
import User from './Components/user';

class App extends Component {
  state = {
    inventory: [],
    warehouse: []
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              <div className='main'>
                <Route path='/warehouseList' render={(props) => 
                {return <WarehouseList {...props} warehouseArray={this.state.warehouse}/>}}/>
                <Route path='/inventoryList' render={(props) => 
                {return <InventoryList {...props} inventoryArray={this.state.inventory}/>}}/>
                <Route path='/warehouses/:id' component = { Warehouse } />
                <Route path='/inventory/:id' component = { Inventory } />
                <Route path='/users' component = { Users } />
                <Route path='/users/id' component = { User }/>
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
