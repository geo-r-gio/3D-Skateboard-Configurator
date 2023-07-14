const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skateboardSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }
  }, {
    timestamps: true,
});

const Skateboard = mongoose.model('Skateboard', skateboardSchema);

module.exports = { Skateboard };