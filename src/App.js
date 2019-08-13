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
     weight: '',
     height: ''
    };
  
  this.handleWeightChange = this.handleWeightChange.bind(this);
  this.handleHeightChange = this.handleHeightChange.bind(this);
 }

handleWeightChange (event) {
  this.setState({ weight: event.target.weight})
}

handleHeightChange (event) {
  this.setState({ height: event.target.height})
}
  

computeBmi() {
  let bmiValue = ( this.state.weight / this.state.height) / this.state.height;
  this.setState({ bmi : bmiValue });
  let bmiClass = this.getBmi(bmiValue);
  this.setState({ bmiClass : bmiClass });
}

getBmi(bmi) {
  if(bmi < 18.5) {
    return "Underweight";
  }
  if(bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  }
  if(bmi >= 25 && bmi < 29.9) {
    return "Overweight";
  }
  if(bmi >= 30) {
    return "Obesity";
  }
}


render() {
  return (
    <div className="App">
    <h1 className="App-title"> My BMI? </h1>
   
   <form>
     <label>
      Weight:
        <input type="text" name="weight" minlength="2" maxlength="4" value={this.state.value} onChange={this.handleChange} />
      </label>
      
      <label>
      Height:
        <input type="text" name="height" maxlength="2" minlength="2" value={this.state.value} onChange={this.handleChange}  />
      </label>
      
     <input type="submit" value="Submit" />
    </form>
    
    <footer>
    <p> this was developed by the young HSSK Prodigy </p>
    </footer>
    </div>
  );
 }
}

