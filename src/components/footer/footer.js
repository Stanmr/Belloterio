import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">

          <div className="f1">

              <img src="img/bellotero-logo-white.svg" className="bellotero-logo-white"/>
        
          </div>

          <div className="f2">
           
          <nav>
              <ul>
                  <li className="first">
                      <a href="/features">Feaures</a>
                  </li>

                  <li>
                      <a href="/solutions">Solutions</a>
                  </li>

                  <li>
                      <a href="/stories">Stories</a>
                  </li>

                  <li>
                      <a href="/partners">Partners</a>
                  </li>

                  <li>
                      <a href="/About">About</a>
                  </li>

                  <li className="last">
                      <a href="/blog">Blog</a>
                  </li>
              </ul>
          </nav>
        
          </div>

          <div className="f3">

              <nav>
              <ul>
                  <li className="first">
                      <a href="/features">Social</a>
                  </li>

                  <li>
                      <a href="https://www.facebook.com/muse/">Facebook</a>
                  </li>

                  <li>
                      <a href="https://twitter.com/Stanmr_">Twitter</a>
                  </li>

                  <li>
                      <a href="https://www.linkedin.com/in/stanmr/">Linkedin</a>
                  </li>

                  <li>
                      <a href="https://www.instagram.com/stanmr/">Instagram</a>
                  </li>

                  
              </ul>
          </nav>
          
          </div>

          <div className="f4">

                <nav>
              <ul>
                  <li className="first">
                      <a href="/features">Support</a>
                  </li>

                  <li>
                      <a href="/solutions">support@bellotero.com</a>
                  </li>

                  <li>
                      <a href="/stories">(555)555555</a>
                  </li>

                  <li>
                      <a href="/partners">Chat now</a>
                  </li>

              </ul>
          </nav>

          <img src="img/app-store.svg" class="app-store"/>
          <img src="img/google-play.png" srcset="img/google-play@2x.png 2x, img/google-play@3x.png 3x" class="google-play"/>
          
          </div>
        
      </div>
    );
  }
}

export default Footer;
