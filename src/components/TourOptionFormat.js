export default function TourOptionFormat(props){  
    return  props.map(prop =>
         <div className="tour">
              <img src={prop.imagePath} alt={prop.name}/>
              <div className ='tourInner'>
                <div className = "tourInnerTop">
                    <div className = 'tourName'>{prop.name}</div>
                    <div className = 'tourCity'>{prop.city}</div>
                </div>
                <div className = 'tourInnerBottom'>
                    <div className = 'tourStayTime'>{prop.stayTime}</div>
                    <div className = 'separator' />
                    <div className = 'tourTourists'>{prop.touristsAdult + " adult(s) & " + prop.touristsKid + " kid(s)" }</div>
                    <div className = 'separator' />
                    <div className = 'tourPrice'>{prop.price + ' грн.'}</div>
                </div>
              </div>
         </div>)
}