require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//create personSchema
const { Schema } = mongoose;
const personSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  age: Number,
  body: String,
  favoriteFoods: Array
});

//create Person model
const Person = mongoose.model('Person', personSchema);

// let Person;

const createAndSavePerson = (done) => {
  const bill = new Person({ name: 'Bill', age: 27, favoriteFoods: ['sausage', 'cucumber'] });

  bill.save(function (err, data) {
    if (err) {
      console.error(err);
    } else {
      done(null, data)
    }
  });
  // done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
 Person.create({name: 'Jimmy'}, {name: 'Jenny', age: 33, favoriteFoods: ['hot dog']})
  done(null, data);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
