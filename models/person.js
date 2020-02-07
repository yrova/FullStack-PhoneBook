const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const uniqueValidator = require("mongoose-unique-validator");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name required"],
    unique: true,
    uniqueCaseInsensitive: true,
    min: 3
  },
  number: {
    type: Number,
    required: [true, "User phone number required"],
    
    unique: true,
    id: Number
  }
});

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

personSchema.plugin(uniqueValidator, {
  message: "Error, expected {PATH} to be unique."
});

module.exports = mongoose.model("Person", personSchema);
