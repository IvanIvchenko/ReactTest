import { selectedCountryConstants } from "../constants/selectedCountryConstants";

export const selectedCountry = (country) => {
    return {
        type: selectedCountryConstants.SELECTED_COUNTRY,
        payload: country,
    };
};
export const removeSelectedCountry = () => {
    return {
        type: selectedCountryConstants.REMOVE_SELECTED_COUNTRY,
    };
};