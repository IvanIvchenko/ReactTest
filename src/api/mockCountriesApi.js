import {countriesData, toursData} from './countriesData.js'

export const getCountries = () =>
  new Promise((resolve, reject) => {
    if (!countriesData) {
      return setTimeout(
        () => reject(new Error('Countries data not found')),
        250
      );
    }
 
    setTimeout(() => resolve(Object.values(countriesData)), 250);
  });

export const getCountry = (id) =>
  new Promise((resolve, reject) => {
    const country = countriesData[id];
 
    if (!country) {
      return setTimeout(
        () => reject(new Error('Country not found')),
        250
      );
    }
 
    setTimeout(() => resolve(countriesData[id]), 250);
  });

export const getToursByCountryId = (id) =>
  new Promise((resolve, reject) => {
    const tours = toursData.filter(tour => tour.countryId === parseInt(id))
 
    if (!tours) {
      return setTimeout(
        () => reject(new Error('Tours not found')),
        250
      );
    }
 
    setTimeout(() => resolve(Object.values(tours)), 250);
  });