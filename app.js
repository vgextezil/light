import express from 'express';
import airplanes from './data/airplanes.json';
import _ from 'lodash';

const PORT = 3000;
const server = express();
const BASE_ITEMS_URL = '/api/v1/airplanes';
console.log('Nodemon1');
server.listen(PORT, () =>{
    console.log(`Server has been started on port ${PORT}`);
})

server.get('/', (req,res) => {
    res.send('Hello from express!!!');
})

server.get(BASE_ITEMS_URL, (req, res) => {
    res.json(airplanes);
});

server.get(BASE_ITEMS_URL + '/:id', (req, res) => {
    const id = req.params.id;
    const airplane = _.find(airplanes, item => item.id === id);
    if(airplane) {
        res.json(airplane);
    }
    else {
        res.send('Not found')
    }
});