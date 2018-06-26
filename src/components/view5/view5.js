import React, { Component } from 'react';

class View5 extends Component {
  render() {
    return (
      <div className="view5">

        <div className="izq">
            <span className="par">Ready to get started with Bellotero.io?</span>
        </div>

        <div className="der">
            <span className="par2">No more manual data entry.<br/> Hands off. Thumbs up.</span>
            <input type="email" name="emailaddress" value="Your email address" className="lastEmail"/>
            <button type="button" className="button5">Request a demo</button>
        </div>

      </div>

      
    );
  }
}

export default View5;
