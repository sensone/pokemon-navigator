import ARRAY_NAME from '../constants/pokemons';
import ITEM_NAME from '../constants/pokemons';
import _ from 'lodash';

const initialState = {
  fetching: false,
  fetched: false,
  pokemons: [],
  error: null
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "FETCH_" + ARRAY_NAME: {
      return {...state, fetching: true}
    }
    case "FETCH_" + ARRAY_NAME + "_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_" + ARRAY_NAME + "_FULFILLED": {
      let pokemons = mapPokemons(action.payload);

      return {
        ...state,
        fetching: false,
        fetched: true,
        pokemons: pokemons,
      }
    }
  }

  return state;
}

function mapPokemons(payload) {
  let pokemons;

  pokemons = payload.map(function(pokemon, index) {
    return {
      ...pokemon,
      _id: index,
    }
  });

  return pokemons;
}
