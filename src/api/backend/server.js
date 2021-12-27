import express from 'express'
import cors from 'cors'
import countryRoute from './routes/countryRoute.js'
import tourRoute from './routes/tourRoute.js'

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use("/public", express.static('img')); 

app.use("/api/countries", countryRoute);
app.use("/api/tour", tourRoute)

app.listen(5000, () => console.log("Server started at localhost:5000"));