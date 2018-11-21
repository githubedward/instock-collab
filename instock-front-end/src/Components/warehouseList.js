import React, { Component } from 'react'

export default class warehouseList extends Component {
  render() {
    let warehouseData = (data)=>{
      return (
        <Link to={'/warehouse/' + data.id}>
          <div className='warehouse'>
            <h1> {data.title} </h1>
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
        </Link>
      )
    }
    return (
      <div>
        {this.props.warehouseArray.map((data)=> warehouseData(data))}
      </div>
    )
  }
}
