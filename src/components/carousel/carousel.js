import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
        <div className="carousel">
            <Carousel cla>
                <img src="http://www.kbic.com/blog/academic-medicine/files/2017/03/4-Ways-to-Answer-Why-Should-We-Hire-You-KBIC-Academic-Medicine-e1490285583500.jpg" />
                <img src="http://iddp.com/wp-content/uploads/2016/08/hire_me.jpg" />
            </Carousel>
        </div>
    );
  }
}