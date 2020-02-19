/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
const uniqueValidator = require('mongoose-unique-validator');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User name required'],
    unique: true,
    uniqueCaseInsensitive: true,
    min: 3,
    max: 30,
  },
  number: {
    type: String,
    required: [true, 'User phone number required'],
    min: 10,
    max: 11,
    unique: true,
  },
});

personSchema.set('toJSON', {
  transform: (document, returnOb) => {
    const returnedObject = returnOb;
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

personSchema.plugin(uniqueValidator, {
  message: 'Error, expected {PATH} to be unique.',
});

module.exports = mongoose.model('Person', personSchema);
