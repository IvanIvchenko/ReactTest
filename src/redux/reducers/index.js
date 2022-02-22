import { combineReducers } from "redux";
import { selectedCountryReducer } from "./countryReducer";
const reducers = combineReducers({
  country: selectedCountryReducer,
});
export default reducers;