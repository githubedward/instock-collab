import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class WarehouseList extends Component {
  render() {
    let warehouseData = (data)=>{
      return (
        <div className='warehouse'>
          <Link to={'/warehouse/' + data.id}><h1> {data.title} </h1></Link>
          <div className='address'> 
            <h2>Address</h2>
            <p> {data.street} </p>
            <p> {data.city} </p>
            <p> {data.postal} </p>
          </div>
          <div className='contact'>
            <h1> Contact </h1>
            <p> {data.manager} </p>
            <p> {data.phone} </p>
            <p> {data.email} </p>
          </div>
          <div className='inventory'>
          <h1> Inventory Type: </h1> 
          <p> {data.inventory}</p>
          </div>
        </div>
    )
  }
    return (
      <div>
        {this.props.warehouseArray.map((data)=> warehouseData(data))}
      </div>
    )
  }
}
