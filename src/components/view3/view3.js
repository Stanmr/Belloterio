import React, { Component } from 'react';
//
//
//

class View3 extends Component {
  render() {
    return (
      <div className="view3">

        <div className="izquierda">
        
            <img src="img/photo-1.png" srcset="img/photo-1@2x.png 2x, img/photo-1@3x.png 3x" className="photo-1"/>
            
        </div>

        <div className="centro">

            <img src="img/photo-2.png" srcset="img/photo-2@2x.png 2x, img/photo-2@3x.png 3x" className="photo-2"/>
        </div>

        <div className="derecha">


        <img src="img/photo-3.png" srcset="img/photo-3@2x.png 2x, img/photo-3@3x.png 3x" className="photo-3"/> 
            
        </div>
 
      </div>
    );
  }
}

export default View3;
