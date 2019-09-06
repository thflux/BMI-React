import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
})
)

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     weight: 0,
     height: 0,
     bmi: '',
     bmiClass: ''
    };
 this.handleWeightChange = this.handleWeightChange.bind(this); 
 this.handleHeightChange = this.handleHeightChange.bind(this);
 this.getBMI = this.getBMI.bind(this);
 this.reset = this.reset.bind(this);
 this.bmiZone = this.bmiZone.bind(this);
 this.getBMIClass = this.getBMIClass.bind(this);
 }

handleWeightChange(event) {
  this.setState({ weight: event.target.value})
}

 handleHeightChange(event) {
  this.setState({ height: event.target.value})
}

getBMI() {
  this.setState({bmi: ((this.state.weight  * 703) / (this.state.height ** 2)).toFixed(1) });
}

getBMIClass() {
  this.setState({bmiClass: this.bmiZone(this.state.bmi) });
}

bmiZone(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Optimal Weight";
  }
  else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight"
  }
  else if (bmi >= 30) {
    return "Obesity"
    }
}

reset(){
  this.setState({ weight: 0, height: 0 , bmi: '', bmiClass: ''})
}  



render() {
  return (
    <div className="App">
    <h1 className="App-title"> My BMI </h1>
   
    
    
     <label>
      Weight:
        <input 
        type="text" 
        name="weight"
        onChange={this.handleWeightChange}
        value={this.state.weight}  />
      </label>
      
      
  
      
      
      <label>
      Height:
        <input 
        type="text" 
        name="height" 
        onChange={this.handleHeightChange}
        value={this.state.height}   />
      </label>
        
        
        
        <Button className='bmi-calc' onClick={this.getBMI}>
        Get BMI
        </Button>
      
        
        
        <Button className='bmi-class' onClick={this.getBMIClass}>
        BMI Class + Info 
        </Button>
        
        
        
        <Button  className='reset' onClick={this.reset}>
        Reset
        </Button>
        
        
    
    
    
      <h3>BMI = {this.state.bmi}</h3>
      <h4>BMI Class = {this.state.bmiClass}</h4>
    
    
    
    
    <footer>
    <p> this was developed by the young HSSK Prodigy </p>
    </footer>
    </div>
  );
 }
}

