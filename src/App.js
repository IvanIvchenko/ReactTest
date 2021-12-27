import React from 'react';
import {getCountries, getToursByCountryId} from './api/mockCountriesApi'
import SelectField from './components/SelectField.js'
import ToursDisplay from './components/ToursDisplay.js'
import TourOptionFormat from './components/TourOptionFormat.js'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      displayValue: [],
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  componentDidMount(){
    getCountries()
    .then(result =>this.setState({countries: result}))
  }

  handleSelectChange(event){
    getToursByCountryId(event.target.value)
    .then(result => TourOptionFormat(result))
    .then(result => this.setState({displayValue: result}))
    event.preventDefault()
  }

  render(){

    return (
      <div className="App">
        <div class="selectContainer">
          <SelectField 
            value = {this.state.countries}
            onChange = {this.handleSelectChange} 
          />
        </div>
        <ToursDisplay value = {this.state.displayValue} />
      </div>
    );
  }
}

export default App;
