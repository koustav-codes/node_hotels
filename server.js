const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./person');
const Menu = require('./menuItems');
const passport = require('./auth');

require('dotenv').config();

app.use(express.json()); // IMPORTANT
app.use(passport.initialize());

const logRequest = (req, res, next) => {
  console.log(`${new Date().toLocaleString()} Request Made to : ${req.originalUrl}`);
  next(); // Move on to the next phase
};

app.use(logRequest);

const localAuthMiddleware = passport.authenticate('local',{session:false})

app.get('/', (req, res) => {
  res.send('Hello Everyone this is Koustav');
});

const port = process.env.PORT || 3020

const personRoutes = require('./personRoutes');
app.use('/person',localAuthMiddleware,personRoutes); 

// 


const menuItemRoutes = require('./menuItemRoutes');
const { config } = require('dotenv');
app.use('/api/menuItems', menuItemRoutes);




// const port = 3020;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});