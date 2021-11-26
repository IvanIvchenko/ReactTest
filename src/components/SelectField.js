export default function SelectField(props){
    return(
    <select className="form-select" onChange={props.onChange}>
      <option value="DEFAULT" selected disabled hidden>Choose here...</option>
      {
        props.value.map( (x) => 
      <option key={x.id} value={x.id}>{x.name}</option> )
    }</select>
    );
  }