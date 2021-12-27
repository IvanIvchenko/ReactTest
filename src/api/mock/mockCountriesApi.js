import {countries, tours} from './countriesData.js'

export const getCountries = () =>
  new Promise((resolve, reject) => {
    if (!countries) {
      return setTimeout(
        () => reject(new Error('Countries data not found')),
        250
      );
    }
 
    setTimeout(() => resolve(Object.values(countries)), 250);
  });

export const getCountry = (id) =>
  new Promise((resolve, reject) => {
    const country = countries[id];
 
    if (!country) {
      return setTimeout(
        () => reject(new Error('Country not found')),
        250
      );
    }
 
    setTimeout(() => resolve(countries[id]), 250);
  });

export const getToursByCountryId = (id) =>
  new Promise((resolve, reject) => {
    const toursById = tours.filter(tour => tour.countryId === parseInt(id))
    if (!toursById) {
      return setTimeout(
        () => reject(new Error('Tours not found')),
        250
      );
    }
 
    setTimeout(() => resolve(Object.values(toursById)), 250);
  });