export default function toursFilter(tours, filters) {
    return tours.filter(tour => {
        if (filters.minPrice) {
            if (filters.minPrice >= tour.price) {
                return false
            }
        }
        if (filters.maxPrice) {
            if (filters.maxPrice <= tour.price) {
                return false
            }
        }
        if (filters.toursCities) {
            let checked = false
            if (Array.isArray(filters.toursCities)) {
                for (const value of filters.toursCities) {
                    if (tour.city === value) {
                        checked = true
                    }
                }
            } else {
                if (tour.city === filters.toursCities) {
                    checked = true 
                }
            }
            if(!checked){
                return false
            }
        }
        if (filters.toursTouristsAdult) {
            let checked = false
            if (Array.isArray(filters.toursTouristsAdult)){
                for (const value of filters.toursTouristsAdult) {
                    //console.log(value)
                    if (tour.touristsAdult === parseInt(value)) {
                        checked = true
                    }
                }
            } else {
                if (tour.touristsAdult === parseInt(filters.toursTouristsAdult)) {
                    checked = true
                }
            }
            if(!checked){
                return false
            }

        }
        if (filters.toursTouristsKid) {
            let checked = false
            if(Array.isArray(filters.toursTouristsKid)){
                for (const value of filters.toursTouristsKid) {
                    if (tour.touristsKid === parseInt(value)) {
                        checked = true
                    }
                }
            } else{
                if(tour.touristsKid === parseInt(filters.toursTouristsKid)){
                    checked = true
                }
            }
            if(!checked){
                return false
            }
    }
    if (filters.toursStayTime) {
        let checked = false
        if(Array.isArray(filters.toursStayTime)){
            for (const value of filters.toursStayTime) {
                if (tour.stayTime === parseInt(value)) {
                    checked = true 
                }
            }
        } else{
            if(tour.stayTime === parseInt(filters.toursStayTime)){
                checked = true
            }
        }
        if(!checked){
            return false
        }
    }
    return true
})
}
