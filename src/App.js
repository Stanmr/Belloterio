import React, { Component } from 'react';
import PropTypes from 'prop-types';


//Components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/pages/homePage';

//Assets
import './Assets/css/default.min.css';
import View2 from './components/view2/view2';
import View3 from './components/view3/view3';
import View4 from './components/view4/view4';
import View5 from './components/view5/view5';
import Carousel from './components/carousel/carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Home/>
          <View2/>
          <View3/>
          <Carousel/>
          <View4/>
          <View5/>
        <Footer/>
      </div>
    );
  }
}

export default App;
