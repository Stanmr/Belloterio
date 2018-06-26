import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className= "columnaIzquierda">
          <p>
          Digitize your invoices and create your own shopping cart.
          </p>
          <input type="email" name="emailaddress" value="Your email address" className="email"/>
          <button type="button" className="button1">Request a demo</button>
        </div>
        <div className="columnaDerecha">
          <img src="img/hero-mockup.png"
            srcset="img/hero-mockup@2x.png 2x,
                    img/hero-mockup@3x.png 3x"
            className="hero-mockup"/>
        </div>
      </div>

      
    );
  }
}

export default Home;
