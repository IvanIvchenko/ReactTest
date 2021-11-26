export default function SelectField(countries){
    return(
    <select className="form-select" onChange={countries.onChange}>
      <option value="DEFAULT" selected disabled hidden>Choose here...</option>
        {
          countries.value.map( (country) => 
          <option key={country.id} value={country.id}>{country.name}</option> 
        )}
      </select>
    );
  }