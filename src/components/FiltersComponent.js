import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
export default function FiltersComponent(props) {

    let selectedCountryId = useSelector(state => state.country.selectedCountry)
    const [toursCities, setToursCities] = useState([]);
    const [toursTouristsAdult, setToursTouristsAdult] = useState([]);
    const [toursTouristsKid, setToursTouristsKid] = useState([]);
    const [toursStayTime, setToursStayTime] = useState([]);
    const [toursPrice, setToursPrice] = useState([]);
    const [checkboxCategory, setCheckboxCategory] = useState({
        toursCitiesChecked: [],
        toursTouristsAdultChecked: [],
        toursTouristsKidChecked: [],
        toursStayTimeChecked: [],
    })
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);



    useEffect(() => {
        fetch(`http://localhost:5000/api/countries/${selectedCountryId}/tours`)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch');
                }
            })
            .then(toursData => {
                setToursCities([...new Set(toursData.map(tour => tour.city))])
                setToursTouristsAdult([...new Set(toursData.map(tour => tour.touristsAdult))].sort(function (a, b) { return a - b }))
                setToursTouristsKid([...new Set(toursData.map(tour => tour.touristsKid))].sort(function (a, b) { return a - b }))
                setToursStayTime([...new Set(toursData.map(tour => tour.stayTime))].sort(function (a, b) { return a - b }))
                setToursPrice([...new Set(toursData.map(tour => tour.price))])
                setIsLoaded(true)
            })

            return () => {
                setCheckboxCategory({
                    toursCitiesChecked: [],
                    toursTouristsAdultChecked: [],
                    toursTouristsKidChecked: [],
                    toursStayTimeChecked: [],
                })
            }
        },
        [selectedCountryId]
    )

    function createCbx(valueArray, cbxName) {
        return (
            valueArray.map(value => {
                let cbxLabel = cbxName + value
                return (
                    <div>
                        <label htmlFor={cbxLabel}>
                            <input type="checkbox" id={cbxLabel} value={value} name={cbxName} onChange={handleInputChange} />{value}
                        </label>
                    </div>
                )
            })
        )
    }

    function handleInputChange(event) {
        if (event.target.type === "checkbox") {
            let cbxSet = event.target.name
            let cbxValue = event.target.value
            if (checkboxCategory[cbxSet].includes(cbxValue)) {
                setCheckboxCategory({
                    ...checkboxCategory,
                    [cbxSet]: checkboxCategory[cbxSet].filter(cbx => cbx !== cbxValue)
                });
            } else {
                setCheckboxCategory({
                    ...checkboxCategory,
                    [cbxSet]: [...checkboxCategory[cbxSet], event.target.value]
                });
            }
        } else {
            if (event.target.name === "minPrice" && Math.min.apply(Math, toursPrice)) {
                setMinPrice(event.target.value)
            } if (event.target.name === "maxPrice" && Math.max.apply(Math, toursPrice)) {
                setMaxPrice(event.target.value)
            }
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        let querry = ''
        Object.keys(checkboxCategory).map(key => {
                let keyFormatted = key.replace('Checked', '');
                return checkboxCategory[key].map(cbx => {
                    querry = `${querry + keyFormatted}=${cbx}&`;
                    return querry 
                })
        })
        querry = `${querry}minPrice=${minPrice}&maxPrice=${maxPrice}` 
        return props.onSubmit(querry)
    }

    const displayFilters = () => {
        if (isLoaded) {
            return (
                <form className="filtersComponent" onSubmit={handleFormSubmit}>
                    <div className="filtersCity">
                        <p>City:</p>
                        {createCbx(toursCities, 'toursCitiesChecked')}
                    </div>
                    <div className="filtersAdults">
                        <p>Adult Tourists:</p>
                        {createCbx(toursTouristsAdult, 'toursTouristsAdultChecked')}
                    </div>
                    <div className="filtersKids">
                        <p>Underage Tourists:</p>
                        {createCbx(toursTouristsKid, 'toursTouristsKidChecked')}
                    </div>
                    <div className="filtersStayTime">
                        <p>Stay Time:</p>
                        {createCbx(toursStayTime, 'toursStayTimeChecked')}
                    </div>
                    Price:
                    <div className="minPrice">
                        <input
                            type="number"
                            onChange={handleInputChange}
                            min={Math.min.apply(Math, toursPrice)}
                            max={Math.max.apply(Math, toursPrice)}
                            autoComplete="off"
                            name="minPrice"
                            placeholder={Math.min.apply(Math, toursPrice)}
                        />
                    </div>
                    -
                    <div className="maxPrice">
                        <input
                            type="number"
                            onChange={handleInputChange}
                            min={Math.min.apply(Math, toursPrice)}
                            max={Math.max.apply(Math, toursPrice)}
                            autoComplete="off"
                            name="maxPrice"
                            placeholder={Math.max.apply(Math, toursPrice)}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            )
        }
    }
    return (
        <>{displayFilters()}</>
    )
}