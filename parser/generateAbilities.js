var fs = require('fs');
var _ = require('lodash');
var pokemons = require('../api/data.json');
var abbilitiesArr = [];
var weaknessArr = [];
var typesArr = [];
var weight, height, params;


for (var i = 0; i < pokemons.length; i++) {
  var pokemon = pokemons[i];

  abbilitiesArr = _.uniq(abbilitiesArr.concat(pokemon.abilities));
  weaknessArr = _.uniq(weaknessArr.concat(pokemon.weakness));
  typesArr = _.uniq(typesArr.concat(pokemon.type));
}

weight = {
  min: _.minBy(pokemons, function(p) {return p.weight;}).weight,
  max: _.maxBy(pokemons, function(p) {return p.weight;}).weight
};

height = {
  min: _.minBy(pokemons, function(p) {return p.height;}).height,
  max: _.maxBy(pokemons, function(p) {return p.height;}).height
};


params = {
  abilities: _.sortBy(abbilitiesArr),
  weakness: _.sortBy(weaknessArr),
  type: _.sortBy(typesArr),
  weight: weight,
  height: height
}

fs.writeFile('../api/params.json', JSON.stringify(params), function (err) {
  if (err) return console.log(err);
  console.log('File was saved');
});
