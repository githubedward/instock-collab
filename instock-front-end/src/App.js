import React, { Component } from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, Switch, Redirect, /* Link */ } from 'react-router-dom';
import WarehouseList from './Components/warehouseList';
import InventoryList from './Components/AllInventoryList';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import TitleBar from './Components/TitleBar';
import WarehouseInventory from './Components/WarehouseInventory';
import InventoryDetail from  './Components/InventoryDetail';

// import Inventory from './Components/inventory';
// import Users from './Components/users';
// import User from './Components/user';



class App extends Component {
  state = {
    inventory: [],
    warehouse: []
  };

  getWarehouseData = (data) => {
    this.setState({
      warehouse: data
    })
  };

  getInventoryData = (data) => {
    this.setState({
      inventory: data
    })
  }

  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className='main'>
            <Header />
            <Switch>
                <Route path='/' exact render={() => <Redirect to='/warehouses'/>} />
                <Route path='/warehouses/:id' exact render={(props) => <WarehouseInventory {...props} /> }/>
                <Route path='/warehouses' exact render={(props) => 
                {return <WarehouseList {...props} warehouseArray={this.state.warehouse} getWarehouseData={this.getWarehouseData} />}}/>
                <Route path='/inventory' exact render={(props) => 
                {return <InventoryList {...props} inventoryArray={this.state.inventory} getInventoryData={this.getInventoryData}/>}}/>
                <Route path='/inventory/:id' exact render={(props) => <InventoryDetail {...props} /> }/>
                {/* <Route path='/users' component = { Users } /> */}
                {/* <Route path='/users/id' component = { User }/> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;