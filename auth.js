const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // THIS IS ALSO CALLED USER-NAME AND PASSWORD STRATEGY
const Person = require('./person');


passport.use(new LocalStrategy(async (USERNAME, password, done) => {
  try {
    // console.log('received crendentials', USERNAME, password);
    const user = await Person.findOne({username: USERNAME})
    if(!user){
      return done(null, false, { message: 'Incorrect username.' });
    }
    const isPasswordMatch = user.comparePassword(password);
      if(isPasswordMatch){
        return done(null, user);
      }else{
        return done(null, false, { message: 'Incorrect Password.' })
    }
    
  } catch (error) {
    return done (error);
  }
}))

module.exports = passport;