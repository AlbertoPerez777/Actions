const express = require('express');
const _ = require('underscore');

var port = process.env.PORT || 3000;
var animals = {
    "cat": "meow",
    "dog": "bark",
    "eel": "hiss",
    "bear": "growl",
    "frog": "croak",
    "lion": "roar",
    "bird": "tweet",
    "ballena": "Naho",
    "tiburon": "grrr",
    "sapo": "croak",
    "burro": "AAA"
}

function getAnimal() {
  return animal = _.sample(Object.entries(animals));
}

const app = express();

app.get('/', async (req, res, next) => {
  try {
    const [animal_name, sound] = getAnimal();
    res.status(200).send(`
      George Orwell had a farm.<br />
      E-I-E-I-O<br />
      And on his farm he had a ${animal_name}.<br />
      E-I-E-I-O<br />
      With a ${sound}-${sound} here.<br />
      And a ${sound}-${sound} there.<br />
      Here a ${sound}, there a ${sound}.<br />
      Everywhere a ${sound}-${sound}.<br />
    `);
  } catch (error) {
    next(error);
  }
});
 
app.get('/api', async (req, res, next) => {
  try {
    res.status(200).json(animals);
  } catch (error) {
    next(error);
  }
});
 
// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
 
//const server = app.listen(port, () => {
//  console.log(`Launching server on http://localhost:${port}`);
//});
 
//module.exports = server; 

module.exports = app;
