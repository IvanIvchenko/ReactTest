export default function TourCard(tour){  
    return(
         <div key={tour.id} className="tour">
              <img src={tour.imagePath} alt={tour.name}/>
              <div className ='tourInner'>
                <div className = "tourInnerTop">
                    <div className = 'tourName'>{tour.name}</div>
                    <div className = 'tourCity'>{tour.city}</div>
                </div>
                <div className = 'tourInnerBottom'>
                    <div className = 'tourStayTime'>{tour.stayTime + " days & 1 night"}</div>
                    <div className = 'separator' />
                    <div className = 'tourTourists'>{tour.touristsAdult + " adult(s) & " + tour.touristsKid + " kid(s)" }</div>
                    <div className = 'separator' />
                    <div className = 'tourPrice'>{tour.price + ' грн.'}</div>
                </div>
              </div>
         </div>)
}