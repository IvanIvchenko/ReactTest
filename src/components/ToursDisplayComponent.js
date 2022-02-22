import TourCard from "./TourCard"

export default function ToursDisplay(tours){
  return tours.value.map(tour => TourCard(tour))
}