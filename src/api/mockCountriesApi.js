import { v4 as uuidv4 } from 'uuid';
 
const idOne = uuidv4();
const idTwo = uuidv4();

let countriesData = {
    [idOne]: {id: idOne, name: 'Afghanistan', code: 'AF'}, 
    [idTwo]: {id: idTwo, name: 'Åland Islands', code: 'AX'}, 
}

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

export const createCountry = (data) =>
  new Promise((resolve, reject) => {
    if (!data.name || !data.code) {
      reject(new Error('Not all information provided'));
    }
 
    const id = uuidv4();
    const newCountry = { id, ...data };
 
    countriesData = { ...countriesData, [id]: newCountry };
 
    setTimeout(() => resolve(true), 250);
  });

export const updateCountry = (id, data) =>
  new Promise((resolve, reject) => {
    if (!countriesData[id]) {
      return setTimeout(
        () => reject(new Error('Country not found')),
        250
      );
    }
 
    countriesData[id] = { ...countriesData[id], ...data };
 
    return setTimeout(() => resolve(true), 250);
  });

export const deleteCountry = (id) =>
  new Promise((resolve, reject) => {
    const { [id]: country, ...rest } = countriesData;
 
    if (!country) {
      return setTimeout(
        () => reject(new Error('Country not found')),
        250
      );
    }
 
    countriesData = { ...rest };
 
    return setTimeout(() => resolve(true), 250);
  });