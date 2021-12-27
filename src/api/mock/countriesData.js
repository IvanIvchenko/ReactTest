import {grandBlue, sandBeach, romaHost, zanaduHotel, miklagordHotel, ufukPension} from "../../assets/img/index.js"

export let countriesData = [ 
    {id: 0, name: 'Egypt', code: 'EG'}, 
    {id: 1, name: 'Turkey', code: 'AX'}, 

]

export let toursData = [ 
    {id: 0, countryId: 0, name: 'Grand Blue Saint Maria Aqua Park', imagePath: grandBlue, city: 'Hurghada', touristsAdult: 1, touristsKid: 0,  stayTime: '2 days & 1 night', price: 10071}, 
    {id: 1, countryId: 0, name: 'Sand Beach Hotel', imagePath: sandBeach, city: 'Hurghada', touristsAdult: 2, touristsKid: 0, stayTime: '2 days & 1 night', price: 10135}, 
    {id: 2, countryId: 0, name: 'Roma Host Way Aqua Park', imagePath: romaHost, city: 'Soma Bay', touristsAdult: 1, touristsKid: 1, stayTime: '1 day & 1 night', price: 10225},
    {id: 3, countryId: 1, name: 'The Zanadu Hotel', imagePath: zanaduHotel, city: 'Stambul', touristsAdult: 2, touristsKid: 1, stayTime: '3 day & 1 night', price: 12479}, 
    {id: 4, countryId: 1, name: 'Miklagord Hotel', imagePath: miklagordHotel, city: 'Stambul', touristsAdult: 1, touristsKid: 1, stayTime: '1 day & 1 night', price: 12608}, 
    {id: 5, countryId: 1, name: 'Ufuk Pension', imagePath: ufukPension, city: 'Cappadocia', touristsAdult: 2, touristsKid: 2, stayTime: '1 day & 1 night', price: 13628}, 
]

