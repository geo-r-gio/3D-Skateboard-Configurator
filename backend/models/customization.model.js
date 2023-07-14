const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customizationSchema = new mongoose.Schema({
    skateboardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skateboard',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    customizationData: {
      type: Object,
      required: true,
    }
  }, {
    timestamps: true,
});

const Customization = mongoose.model('Customization', customizationSchema);

module.exports = { Customization };