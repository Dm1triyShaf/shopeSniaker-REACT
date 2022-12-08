import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key:'Sport',
                    name:'Всё'
                },
                {
                    key:'cross-country',
                    name:'Всё'
                },
                {
                    key:'Fitnes',
                    name:'Всё'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories