const router = require('express').Router();
let Skateboard = require('../models/skateboard.model');

router.route('/').get((req, res) => {
    Skateboard.find()
        .then(skateboards => res.json(skateboards))
        .catch(err => res.status(400).json("Error " + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = Number(req.body.price);
    const date = Date.parse(req.body.date);

    const newSkateBoard = new Skateboard({name, description, price, date});

    newSkateBoard.save()
        .then(() => res.json('SkateBoard added successfully'))
        .catch(err => res.status(400).json("Error " + err));

});

module.exports = router;