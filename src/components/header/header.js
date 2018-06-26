import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Header extends Component {
  render() {
    return (
      <header>
          <div className="logo">
          <img src="/img/bellotero-logo.svg"/>
          </div>
          

          <nav>
              <ul>
                  <li className="first">
                      <Link to="/features">Feaures</Link>
                  </li>

                  <li>
                      <Link to="/solutions">Solutions</Link>
                  </li>

                  <li>
                      <Link to="/stories">Stories</Link>
                  </li>

                  <li>
                      <Link to="/partners">Partners</Link>
                  </li>

                  <li>
                      <Link to="/About">About</Link>
                  </li>

                  <li className="last">
                      <Link to="/blog">Blog</Link>
                  </li>

                 
                  <button type="button" className="button1">Request a demo</button>

                  <button type="button" className="button2">Log in</button>



                  
              </ul>
          </nav>
          


      </header>
    );
  }
}

export default Header;
