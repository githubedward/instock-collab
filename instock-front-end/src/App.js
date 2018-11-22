import React, { Component } from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, withRouter, Switch, Redirect, Link } from 'react-router-dom';
import WarehouseList from './Components/WarehouseList';

import InventoryList from './Components/AllInventoryList';
// import Inventory from './Components/inventory';
// import Users from './Components/users';
// import User from './Components/user';

class App extends Component {
  state = {
    inventory: [],
    warehouse: [{
      id: 1,
      title: 'Warehouse 1',
      street: '123 Main St West',
      city: 'Toronto, Canada',
      postal: 'M6J 2H2',
      manager: 'Mara Weinberg, Warehouse Manager',
      phone: '+1 416 678 2345',
      email: 'mweinberg@instack.com',
      inventory: 'Industrial, Automotive, Heavy Industry'
    },
    {
      id: 2,
      title: 'Warehouse 2',
      street: '123 Main St West',
      city: 'Toronto, Canada',
      postal: 'M6J 2H2',
      manager: 'Mara Weinberg, Warehouse Manager',
      phone: '+1 416 678 2345',
      email: 'mweinberg@instack.com',
      inventory: 'Industrial, Automotive, Heavy Industry'
    },
    {
      id: 3,
      title: 'Warehouse 3',
      street: '123 Main St West',
      city: 'Toronto, Canada',
      postal: 'M6J 2H2',
      manager: 'Mara Weinberg, Warehouse Manager',
      phone: '+1 416 678 2345',
      email: 'mweinberg@instack.com',
      inventory: 'Industrial, Automotive, Heavy Industry'
    }
  ]};

  inventoryData = (data) => {
    this.setState({
      inventory: data
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/* <Nav /> */}
            <Switch>
              <div className='main'>
                <Route path='/warehouseList' render={(props) => 
                {return <WarehouseList {...props} warehouseArray={this.state.warehouse}/>}}/>
                <Route path='/inventoryList' render={(props) => 
                {return <InventoryList {...props} inventoryArray={this.state.inventory} inventoryData={this.inventoryData}/>}}/>
                {/* <Route path='/warehouses/:id' component = { Warehouse } /> */}
                {/* <Route path='/inventory/:id' component = { Inventory } /> */}
                {/* <Route path='/users' component = { Users } /> */}
                {/* <Route path='/users/id' component = { User }/> */}
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
