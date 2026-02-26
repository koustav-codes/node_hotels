const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = process.enc.DB_URL_LOCAL
const mongoURL = process.env.DB_URL

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