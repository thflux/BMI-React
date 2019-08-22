import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     weight: 0,
     height: 0,
     bmi: 0,
     bmiClass: ''
    };
 this.handleWeightChange = this.handleWeightChange.bind(this); 
 this.handleHeightChange = this.handleHeightChange.bind(this);
 this.getBMI = this.getBMI.bind(this);
 this.reset = this.reset.bind(this);
 this.bmiZone = this.bmiZone.bind(this);
 }

handleWeightChange(event) {
  this.setState({ weight: event.target.value})
}

 handleHeightChange(event) {
  this.setState({ height: event.target.value})
}

getBMI() {
  this.setState({bmi: ((this.state.weight  * 703) / (this.state.height ** 2)).toFixed(1) })
  
  this.setState({bmiClass: this.bmiZone(this.state.bmi)})
}

bmiZone(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Optimal Weight";
  }
  else if (this.state.bmi >= 25 && bmi <= 29.9) {
    return "Overweight"
  }
  else if (bmi >= 30) {
    return "Obesity"
    }
  else {
    return "nothin"
  }
}

reset(){
  this.setState({ weight: 0, height: 0 , bmi: 0, bmiClass: 'nothin'})
}  

render() {
  return (
    <div className="App">
    <h1 className="App-title"> My BMI? </h1>
   
    <ul>
     <label>
      Weight:
        <input 
        type="text" 
        name="weight"
        onChange={this.handleWeightChange}
        value={this.state.weight}  />
      </label>
      </ul>
     
      <ul>
      <label>
      Height:
        <input 
        type="text" 
        name="height" 
        onChange={this.handleHeightChange}
        value={this.state.height}   />
      </label>
       </ul>  
        
        <ul> 
        <Button  className='btn-calc' onClick={this.getBMI}>
        Get Bmi
        </Button>
        </ul>
        
        <ul>
        <Button  className='reset' onClick={this.reset}>
        Reset
        </Button>
        </ul>
        
    
    
    <div className="row">
      <h3>BMI = {this.state.bmi}</h3>
      <h5>BMI Class = {this.state.bmiClass}</h5>
    </div>
    
    
    
    <footer>
    <p> this was developed by the young HSSK Prodigy </p>
    </footer>
    </div>
  );
 }
}

