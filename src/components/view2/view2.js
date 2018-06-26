import React, { Component } from 'react';

class View2 extends Component {
  render() {
    return (
      <div className="view2">
        <div className="upperRectangle">
            <img src="img/logo-1.svg" className="logo"/>
            <img src="img/logo-2.png" srcset="img/logo-2@2x.png 2x, img/logo-2@3x.png 3x" className="logo"/>
            <img src="img/logo-3.png" srcset="img/logo-3@2x.png 2x, img/logo-3@3x.png 3x" className="logo"/>
            <img src="img/logo-4.png" srcset="img/logo-4@2x.png 2x, img/logo-4@3x.png 3x" className="logo"/>
            <img src="img/logo-5.png" srcset="img/logo-5@2x.png 2x, img/logo-5@3x.png 3x" className="logo"/>
            <img src="img/logo-6.png" srcset="img/logo-6@2x.png 2x, img/logo-6@3x.png 3x" className="logo"/>
        </div>

        <div className="grid1">
            <div className="leftColumn">
                <p className="paragraph1">
                    Bellotero.io is the digital solution that gives you fast, 
                    accurate, automated accounts payable and smart, business-transforming 
                    insights. 
                </p>

                <span className="span1">

                    Get the full picture.<br/>
                    In half the time.
                
                </span>

                <p className="paragraph2">
                Threads keep all your conversations clearly separated by topic so replies won’t get buried in an endless stream of group chat. 
                </p>

                <span className="learn">
                    Learn more &rarr;
                </span>
            
            </div>

            <div className= "rightColumn">
            <img src="img/intro-img-1.png" srcset="img/intro-img-1@2x.png 2x, img/intro-img-1@3x.png 3x" className="intro-img-1"/>
            </div>

        </div>

        <div className="grid2">
                <div className="left">
                <img src="img/intro-img-2.png" srcset="img/intro-img-2@2x.png 2x, img/intro-img-2@3x.png 3x" className="intro-img-2"/>

                </div>

                <div className="right">
                    <span className="span2">
                        Timesaving,<br/>
                        moneymaking.
                    </span>

                    <p className="paragraph3">
                        Bellotero.io automatically turns your threaded conversations into a searchable catalog of topics.
                    </p>

                    <span className="learn">
                        Learn more &rarr;
                    </span>
                </div>
        </div>

      </div>

      
    );
  }
}

export default View2;
