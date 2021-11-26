import React from 'react';
//import {getCountries, getToursByCountryId} from '../api/mock/mockCountriesApi'
import SelectField from '../components/SelectField.js'
import ToursDisplay from '../components/ToursDisplay.js'
import './listScreen.css';

class ListScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      countries: [],
      tours: [],
      selectedCountry: null,
      isSelected: false,
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  componentDidMount(){
    //getCountries()
    fetch("http://localhost:5000/api/countries")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Failed to fetch');
      }
    })
    .then(countries => this.setState({countries: countries}))
  }

  handleSelectChange(event){
    //getToursByCountryId(event.target.value)
    fetch(`http://localhost:5000/api/countries/${event.target.value}/tours`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Failed to fetch');
      }
    })
    .then(tours => {
      this.setState({
        selectedCountry: event.target.value,
        tours: tours,
        isSelected: true,
      })
    })
    event.preventDefault()
  }

  render(){

    let {isSelected, tours} = this.state

    const displayTours = () =>{
      if(isSelected){
        return <div className="d-flex justify-content-center toursContainer"><ToursDisplay value = {tours}/></div>
      }
    }
    
    return (

      <div className="ListScreen">
        <div className="selectContainer">
          <SelectField 
            value = {this.state.countries}
            onChange = {this.handleSelectChange} 
          />
        </div>
        {displayTours()}
      </div>
    );
  }
}

export default ListScreen;
