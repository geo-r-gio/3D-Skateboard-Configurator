const router = require('express').Router();
const Customization = require('../models/customization.model');

router.route('/').get((req, res) => {
    Customization.find()
        .then(customizations => res.json(customizations))
        .catch(err => res.status(400).json("Error " + err));
});

router.route('/add').post((req, res) => {
    const skateboardId = db.types.ObjectId(req.body.skateboardId);
    const userId = db.types.ObjectId(req.body.userId);
    const data = req.body.data;
    const date = Date.parse(req.body.date);

    const newSkateBoard = new Skateboard({skateboardId, userId, data, date});

    newSkateBoard.save()
        .then(() => res.json('SkateBoard added successfully'))
        .catch(err => res.status(400).json("Error " + err));

});

module.exports = router;