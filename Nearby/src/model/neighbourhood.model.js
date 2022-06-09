const mongoose = require("mongoose");

const NeighbourSchema = new mongoose.Schema(
  {
    geometry: {
        coordinates: [[[Number,Number]]]
    },
    name: { type: String },
  }
  
);

const Neighbour = mongoose.model('neighbour',NeighbourSchema)
module.exports = Neighbour