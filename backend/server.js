const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, 
    { useNewUrlParser: true }
)

const connection = mongoose.connection;

const usersRouter = require('./routes/users');
const customizationsRouter = require('./routes/customizations');
const skateboardsRouter = require('./routes/skateboards');

connection.once('open', () => {
    console.log('Database connection established');
})

app.use('/users', usersRouter);
app.use('/customizations', customizationsRouter);
app.use('/skateboards', skateboardsRouter);

app.listen(port, () => {
    console.log('listening on port ' + port);
});