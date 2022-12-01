import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title:'Кроссовки Nike Signal Grey White',
          img: '1.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '200$'
        },
        {
          id: 2,
          title:'Кроссовки Nike React Vision White Grey Orange',
          img: '2.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '200$'
        },
        {
          id: 3,
          title:'Кроссовки Nike M2k Tekno Grey White',
          img: '3.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '200$'
        },
        {
          id: 4,
          title:'Кроссовки Nike Air Force LV 8 Under Construction Black Grey',
          img: '4.jpg',
          desc: ' Подходят как для занятий спортом, бега, так и для повседневной носки.',
          category: 'Sport',
          price: '200$'
        }
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Items items={this.state.items}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
