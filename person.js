const mongoose = require('mongoose');

// Person Schema, How the Person data will look, so from Backend we can instruct the frontend, that only on this format, they need to send data.

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum : ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },
    salary:{
        type: Number,
        required: true
    }
})

const PersonModel = mongoose.model('Person', personSchema);

module.exports = PersonModel;