const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./person');
const Menu = require('./menuItems');

app.use(express.json()); // IMPORTANT

app.get('/', (req, res) => {
  res.send('Hello Everyone this is Koustav');
});


const personRoutes = require('./personRoutes');
app.use('/person', personRoutes);


const menuItemRoutes = require('./menuItemRoutes');
app.use('/api/menuItems', menuItemRoutes);

const port = 3020;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});