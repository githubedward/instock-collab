import React, { Component } from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, /* withRouter, */ Switch, Redirect, /* Link */ } from 'react-router-dom';
import WarehouseList from './Components/WarehouseList';
import InventoryList from './Components/AllInventoryList';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

// import Inventory from './Components/inventory';
// import Users from './Components/users';
// import User from './Components/user';

class App extends Component {
  state = {
    title: null,
    inventory: [],
    warehouse: []
  };

  getInventoryData = (data) => {
    this.setState({
      inventory: data
    })
  }

  renderTitleBar() {
    return <div className='main-titleBar'>
        <div className='main-titleBar__text'> {this.state.title} </div>
        <button className='main-titleBar__button' type='button' name='filter-button'>Filter</button>
      </div>
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <div className='main'>
              <Header />
              { this.renderTitleBar() }
              <Switch>
                  <Route path='/' exact render={() => <Redirect to='/warehouses'/>} />
                  <Route path='/warehouses' render={(props) => 
                  {return <WarehouseList {...props} warehouseArray={this.state.warehouse}/>}}/>
                  <Route path='/inventory' render={(props) => 
                  {return <InventoryList {...props} inventoryArray={this.state.inventory} getInventoryData={this.getInventoryData}/>}}/>
                  {/* <Route path='/warehouses/:id' component = { Warehouse } /> */}
                  {/* <Route path='/inventory/:id' component = { Inventory } /> */}
                  {/* <Route path='/users' component = { Users } /> */}
                  {/* <Route path='/users/id' component = { User }/> */}
              </Switch>
            </div>
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;