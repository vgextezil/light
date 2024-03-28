import express from "express";
import airplanes from "../data/airplanes.json";
import _ from "lodash";

const router = express.Router();

router.get('/', (req, res) => {
    res.json(airplanes);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const airplane = _.find(airplanes, item => item.id === id);
    if(airplane) {
        res.json(airplane);
    }
    else {
        res.send('Not found')
    }
});

module.exports = router;
