import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {selectedCountry} from '../redux/actions/countryActions.js'
//import {getCountries, getToursByCountryId, getToursByCountryIfAndFilters} from '../api/mock/mockCountriesApi'
import SelectField from '../components/SelectFieldComponent.js'
import ToursDisplay from '../components/ToursDisplayComponent.js'
import FiltersComponent from '../components/FiltersComponent.js'
import './styles.css';

function ListScreen() {

  const [countries, setCountries] = useState([]);
  const [tours, setTours] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  let selectedCountryId = useSelector(state => state.country.selectedCountry)
  const dispatch = useDispatch();
  useEffect(() => {
    //getCountries()
    fetch("http://localhost:5000/api/countries")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Failed to fetch');
        }
      })
      .then(countries => setCountries(countries))
  }, [])

  function handleSelectChange(event) {
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
        dispatch(selectedCountry(event.target.value))
        setTours(tours)
        setIsSelected(true)
      })
    event.preventDefault()
  }

  function handleFiltersSubmit(event) {
    //getToursByCountryIfAndFilters(selectedCountryId, event)
    fetch(`http://localhost:5000/api/countries/${selectedCountryId}/tours?${event}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Failed to fetch');
        }
      })
      .then(tours => setTours(tours))
  }

  const displayTours = () => {
    if (isSelected) {
      return (
        <>
          <div className="d-flex justify-content-center toursContainer"><ToursDisplay value={tours} /></div>
        </>
      )
    }
  }

  const displayFilters = () => {
    if (isSelected) {
      return (
        <>
          <FiltersComponent selectedCountry={selectedCountryId} onSubmit={handleFiltersSubmit} />
        </>
      )
    }
  }

  return (
    <div className="ListScreen">
      <div className="selectContainer">
        <SelectField
          value={countries}
          onChange={handleSelectChange}
        />
      </div>
      <div className='toursWrapper'>
        {displayFilters()}
        {displayTours()}
      </div>
    </div>
  );
}

export default ListScreen;
