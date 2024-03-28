import express from 'express';
import airplanes from './data/airplanes.json';
import _ from 'lodash';
import AirplaneRouter from './routers/AirplaneRouter'
import morgan from "morgan";

const PORT = 3000;
const server = express();
const BASE_ITEMS_URL = '/api/v1/airplanes';
server.use(morgan('tiny'))
server.use(BASE_ITEMS_URL, AirplaneRouter)


console.log('Nodemon1');
server.listen(PORT, () =>{
    console.log(`Server has been started on port ${PORT}`);
})

server.get('/', (req,res) => {
    res.send('Hello from express!!!');
})
