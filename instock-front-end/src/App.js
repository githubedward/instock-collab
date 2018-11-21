import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {BrowserRouter as Router, Route, withRouter, Switch, Redirect} from 'react-router-dom';
<<<<<<< HEAD
import NavbarSidebar from './Components/NavbarSidebar';
import warehouseList from './Components/warehouseList';
import inventoryList from './Components/inventorylist';
import warehouse from './Components/warehouse';
import inventory from './Components/inventory';
import users from './Components/users';
import user from './Components/user';
=======
import WarehouseList from './Components/warehouseList';
import InventoryList from './Components/AllInventoryList';
import Warehouse from './Components/warehouseList';
import Inventory from './Components/inventory';
import Users from './Components/users';
import User from './Components/user';
>>>>>>> 0f519b7e38a4e0ec44dc51f0911479680da8872a

class App extends Component {
  state = {
    inventory: [{
      id: 1,
      product: 'Product 1',
      date: '05/24/2018',
      location: 'Toronto, CAN',
      quantity: '12,000',
      status: 'In Stock'
    },
    { 
     id: 2,
    product: 'Product 2',
    date: '05/24/2018',
    location: 'Toronto, CAN',
    quantity: '12,000',
    status: 'In Stock'
    },
    {
      id: 1,
      product: 'Product 3',
      date: '05/24/2018',
      location: 'Toronto, CAN',
      quantity: '12,000',
      status: 'In Stock'
    }],
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
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavbarSidebar />
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
