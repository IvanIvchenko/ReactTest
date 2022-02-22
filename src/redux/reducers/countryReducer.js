import { selectedCountryConstants } from "../constants/selectedCountryConstants";

export const selectedCountryReducer = (state = {selectedCountry:''}, { type, payload }) => {
  switch (type) {
    case selectedCountryConstants.SELECTED_COUNTRY:
      return { ...state, selectedCountry: payload };
    case selectedCountryConstants.REMOVE_SELECTED_COUNTRY:
      return { ...state, selectedCountry: '' };
    default:
      return state;
  }
};