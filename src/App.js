import React from 'react';
import {getCountries, getCountry} from './api/mockCountriesApi'
import SelectField from './components/SelectField.js'
import InputDisplay from './components/InputDisplay.js'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      displayValue: '',
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  doGetCountries = async () => {
    try {
      return await getCountries();
    } catch (error) {
      console.log(error);
    }
  };

  doGetCountry = async (id) => {
    try {
      return await getCountry(id);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount(){
    this.doGetCountries()
    .then(result =>this.setState({countries: result}))
  }

  handleSelectChange(event){
    this.doGetCountry(event.target.value)
    .then(({id, ...result}) => result)
    .then(result => this.setState({displayValue: JSON.stringify(result)}))
    event.preventDefault()
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <SelectField 
            value = {this.state.countries}
            onChange = {this.handleSelectChange} 
          />
          <InputDisplay value = {this.state.displayValue} />
        </header>
      </div>
    );
  }
}

export default App;
