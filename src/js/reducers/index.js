import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import pokemons from './pokemonsReducer';

export default combineReducers({
  routing: routerReducer,
  pokemons: pokemons
});
