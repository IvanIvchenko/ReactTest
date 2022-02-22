import express from 'express';
import {countries, tours} from '../countriesData.js'
import toursFilter from "../controllers/toursFilter.js"

const router = express.Router();

router.get("/", (req, res) =>{
    res.send(countries)
})

router.get("/:id", (req, res) =>{
    const id = req.params.id
    const country = countries[id]
    if(country){
        res.send(country)
    }else{
        res.status(404).send("Country not found.")
    }
})

router.get("/:id/tours", (req, res) =>{
    const {id} = req.params
    const filters = req.query
    const country = countries[id]
    if(country){
        const toursByCountryId = tours.filter(tour => tour.countryId === parseInt(id))
        if(Object.keys(filters).length != 0){
            const filteredToursByCountryId = toursFilter(toursByCountryId, filters)
            res.send(filteredToursByCountryId)
        }else{
            res.send(toursByCountryId)
        }
    }else{
        res.status(404).send("Country Not Found.")
    }
})

router.put("/update/:id", (req, res) =>{
    const id = req.params.id
    const country = countries[id]
    if(country){
        country.name = req.params.name || country.name
        country.code = req.params.code || country.code
        countries[id] = country
        res.send(country)
    }else{
        res.status(404).send("Country not found.")
    }
})

router.post("/create", (req, res) =>{
    if(req.params.name || req.params.code){
        const newCountry = {
            id: Math.max(countries.map(country => country.id)) + 1,
            name: req.params.name,
            code: req.params.code
        }
        countries.push(newCountry)
        res.status(201).send({ message: "New country created", data: newCountry });
    }else{
        res.status(422).send({ message: "Requiered data missing."});
    }
})

export default router;