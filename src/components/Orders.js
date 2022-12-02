import React, { Component } from 'react'

export class Orders extends Component {
  render() {
    return (
        <div className='item'>
            <img src={'./sneakers/' + this.props.item.img} alt='img1'/>
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price}</b>
        </div>
    )
  }
}

export default Orders