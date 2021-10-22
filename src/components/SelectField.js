export default function SelectField(props){
    return(
    <select onChange={props.onChange}>{
        props.value.map( (x) => 
      <option value={x.id}>{x.name}</option> )
    }</select>
    );
  }