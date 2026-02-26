const mongoose = require('mongoose');
const manuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    taste:{
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true
    },
    isDrink:{
        type: Boolean,
        default: false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    numberOfSales:{
        type: Number,
        default: 0
    }
})


const manuItems = mongoose.model('menuItem', manuItemSchema);

module.exports = manuItems;