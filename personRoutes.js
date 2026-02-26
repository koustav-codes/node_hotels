const express = require('express');
const router = express.Router();
const Person = require('./person');

router.use(express.json()); // IMPORTANT


router.post('/', async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);
    const response = await newPerson.save();

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/', async (req,res) => {
  try{
    const response = await Person.find();

    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }

})


router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
      const response = await Person.find({work: workType})
      console.log('response fetched');

       res.status(200).json(response);
    }else {
      res.status(400).json({ error: 'Invalid work type' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error'});
  }
})




  


router.put('/:id', async (req, res) => {
try {
  const personId = req.params.id;
  const updatedPersonData = req.body;
  const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
    new:true,
    runValidators: true,
  })
  console.log('Data Updated Successfully');
  res.status(200).json(response);
if(!response){
  return res.status(404).json({ error: 'Person Not Found'});
}

} catch (error) {
  console.log(err);
    res.status(500).json({ error: 'Internal Server Error'});
}
});


// router.delete('/:id', async (req, res) => {
// try {
//   const personId = req.params.id;
//   const deletePersonData = req.body;
//   const response = await Person.findByIdAndDelete(personId, deletePersonData, {
//     new:true,
//     runValidators: true,
//   })
//   console.log('Data Updated Successfully');
//   res.status(200).json(response);
// if(!response){
//   return res.status(404).json({ error: 'Person Not Found'});
// }

// } catch (error) {
//   console.log(err);
//     res.status(500).json({ error: 'Internal Server Error'});
// }
// });


router.delete('/:id', async (req, res) => {
  try {
    const deletePersonID = req.params.id;
    const response = await Person.findByIdAndDelete(deletePersonID);
    if (!response) {
      return res.status(404).json({ error: 'Person Not Found' });
    }

    res.status(200).json({ message: 'Person deleted successfully' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports= router;