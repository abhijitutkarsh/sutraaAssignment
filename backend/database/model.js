const mongoose = require('mongoose');
const { Schema } = mongoose;

const DataSchema = new Schema({
    "dish": String,
    "ingredient": Array
});

const dataModel = new mongoose.model("data", DataSchema);

module.exports = dataModel;

