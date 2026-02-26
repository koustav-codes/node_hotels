const express = require('express');
const router = express.Router();
const Menu = require('./menuItems');

router.use(express.json()); // IMPORTANT

router.post('/', async (req,res) => {
  try{
    const data = req.body;
    const newMenuItem = new Menu(data);
    const response = await newMenuItem.save();

    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }

})


router.get('/', async (req,res) => {
  try{
    const response = await Menu.find();

    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }

})

module.exports= router;