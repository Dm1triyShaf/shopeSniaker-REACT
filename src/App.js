import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title:'Кроссовки Nike Signal Grey White',
          img: '1.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '199$'
        },
        {
          id: 2,
          title:'Кроссовки Nike React Vision White Grey Orange',
          img: '2.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '199$'
        },
        {
          id: 3,
          title:'Кроссовки Nike M2k Tekno Grey White',
          img: '3.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '199$'
        },
        {
          id: 4,
          title:'Кроссовки Nike Air Force LV 8 Under Construction Black Grey',
          img: '4.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '199$'
        },
        {
          id: 5,
          title:'Кроссовки Nike Air Force LV 8 Under Construction Black Grey',
          img: '5.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '199$'
        },
        {
          id: 6,
          title:'Кроссовки Nike Air Force LV 8 Under Construction Black Grey',
          img: '6.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '199$'
        },
        {
          id: 7,
          title:'Кроссовки Nike Air Force LV 8 Under Construction Black Grey',
          img: '7.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '199$'
        },
        {
          id: 8,
          title:'Кроссовки Nike Air Force LV 8 Under Construction Black Grey',
          img: '8.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '199$'
        },
        {
          id: 9,
          title:'Кроссовки Nike Air Force LV 8 Under Construction Black Grey',
          img: '9.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '199$'
        },
        {
          id: 10,
          title:'Кроссовки Nike Air Force LV 8 Under Construction Black Grey',
          img: '10.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '199$'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer/>
      </div>
    )
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
     })
     if(!isInArray)
        this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
