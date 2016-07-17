var http = require('http');
var Stream = require('stream').Transform;
var fs = require('fs');
var PATH = '../src/assets/images/pokemons/';
var pokemons = require('../api/data.json');

for (var i = 0; i < pokemons.length; i++) {
  var pokemon = pokemons[i];

  (function(pokemon) {
    http.request(pokemon.ThumbnailImage, function(response) {
      var data = new Stream();

      response.on('data', function(chunk) {
        data.push(chunk);
      });

      response.on('end', function() {
        var name = PATH + pokemon.id + '.png';

        fs.writeFileSync(name, data.read());
      });
    }).end();
  })(pokemon);
}
