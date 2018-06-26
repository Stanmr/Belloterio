import React, { Component } from 'react';
import Slider from 'react-rangeslider'

class View4 extends Component {
    

    constructor (props, context) {
        super(props, context)
        this.state = {
          value: 0,
          value2: 0
        }
      }

      handleChangeStart = () => {
        console.log('Change event started')
      };
    
      handleChange = value => {
        this.setState({
          value: value,
        })
      };

      handleChange2 = value2 => {
        this.setState({
          value2: value2
        })
      };

      handleChange3 = foodSavings => { this.setState({ foodSavings: foodSavings })};




    
      handleChangeComplete = () => {
        console.log('Change event completed')
      };


      
      



  render() {

    const { value } = this.state
    const { value2 } = this.state
    const {foodSavings} = this.state
    const {annualSavings} = this.state
    
    return (
      <div className="view4">

        <div className="leftCol">
            <span className="parrafo">
                 See how much you can<br/> save with Bellotero.io
            </span>

            <p className="parrafo2">
            With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety. 
            </p>

            <div className="slider">
                <span className="monthly">Monthly ingredient spending</span>
                <input type="number" name="monthSpending" value={value} className="month"/>
                <Slider 
                    min={10}
                    max={100}
                    value={value}
                    onChangeStart={this.handleChangeStart}
                    onChange={this.handleChange}
                    onChangeComplete={this.handleChangeComplete}/>
            </div>

            <div className="slider2">
                <span className="monthly">Full-time employees that process invoices</span>
                <input type="number" name="monthSpending" value={value2} className="month"/>
                <Slider 
                    min={1}
                    max={10}
                    value={value2}
                    onChangeStart={this.handleChangeStart}
                    onChange={this.handleChange2}
                    onChangeComplete={this.handleChangeComplete}/>
            </div>
            
        </div>

        <div className="centerCol">

            <span className="spanCenter">Your estimated annual savings</span>
            <span className="valor">{"$ "+value2*1337 + value*0.3}</span>

        </div>

        <div className="rightCol">

            <span className="spanCenter">Estimated food cost savings</span>
            <span className="valor">{"$ "+value*0.3}</span>
            
        </div>

      </div>

      
    );
  }
}

export default View4;
