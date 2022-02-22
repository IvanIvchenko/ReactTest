import express from 'express';
import {tours} from '../countriesData.js'

const router = express.Router();

router.get("/", (req, res) =>{
    res.send(tours)
})

router.get("/:id", (req, res) =>{
    const id = req.params.id
    const tour = tours[id]
    if(tour){
        res.send(tour)
    }else{
        res.status(404).send("Tours not found.")
    }
})

router.put("/update/:id", (req, res) =>{
    const id = req.params.id
    const tour = tours[id]
    if(tour){
        tour.countryId = req.params.countryId || tour.countryId
        tour.name = req.params.name || tour.name
        tour.imagePath = req.params.imagePath || tour.imagePath
        tour.city = req.params.city || tour.city
        tour.touristsAdult = req.params.touristsAdult || tour.touristsAdult
        tour.touristsKid = req.params.touristsKid || tour.touristsKid
        tour.stayTime = req.params.stayTime || tour.stayTime
        tour.price = req.params.price || tour.price
        tours[id] = tour
        res.send(tour)
    }else{
        res.status(404).send("Tour not found.")
    }
})

router.post("/create", (req, res) =>{
    if(req.params.countryId || 
    req.params.name ||
    req.params.city ||
    req.params.touristsAdult ||
    req.params.touristsKid ||
    req.params.stayTime ||
    req.params.price){

        const newtour = {
            id: Math.max(tours.map(tour => tour.id)) + 1,
            countryId: req.params.countryId, 
            name: req.params.name,
            city: req.params.city,
            touristsAdult: req.params.touristsAdult,
            touristsKid: req.params.touristsKid,
            stayTime: req.params.stayTime,
            price: req.params.price 
        }
        countries.push(newtour)
        res.status(201).send({ message: "New tour created", data: newtour });
    }else{
        res.status(422).send({ message: "Requiered data missing."});
    }
})

export default router;