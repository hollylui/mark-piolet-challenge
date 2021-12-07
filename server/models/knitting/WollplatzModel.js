const { Schema, model } = require("mongoose");

const knittingSchema = new Schema({
  brand: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  "deliver time": { type: String, default: "NA" },
  "needle size": String,
  composition: String,
});

const WollplatzModel = model("Knittings", knittingSchema);

module.exports = WollplatzModel;
