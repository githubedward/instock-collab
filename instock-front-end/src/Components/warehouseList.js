import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class WarehouseList extends Component {

  componentDidMount() {
    fetch("http://localhost:8080/warehouses")
      .then( (response) => response.json())
      .then(data => this.props.getWarehouseData(data));
      };
      
  render() {
    let warehouseData = (data) => {
      return (
        <div className='warehouse'>
        <div>
          <h1> Locations </h1>
          <h3> Filter</h3>
        </div>
          <div className='warehouse'>
            <Link to={'/warehouse/' + data.id}> <h1> {data.title} </h1> </Link>
            <div className='warehouseInfo'>
              <div className='address'> 
                <h2>Address</h2>
                <p> {data.street} </p>
                <p> {data.city} </p>
                <p> {data.postal} </p>
              </div>
              <div className='contact'>
                <h2> Contact </h2>
                <p> {data.manager} </p>
                <p> {data.phone} </p>
                <p> {data.email} </p>
              </div>
              <div className='inventory'>
              <h2> Inventory Type: </h2> 
              <p> {data.inventory}</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
    return (
      <div>
        { this.props.warehouseArray.map((data) => warehouseData(data))}
      </div>
    )
  }
}
