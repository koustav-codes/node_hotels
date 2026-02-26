const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('MongoDB server is connected');
    
})

db.on('error', ()=>{
    console.log('MongoDB Connection Error');
    
})

db.on('disconnected', ()=>{
    console.log('MongoDB server is disconnected');
    
})

module.exports= db;