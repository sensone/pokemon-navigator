import { ARRAY_NAME, ITEM_NAME } from '../constants/pokemons';
import _ from 'lodash';

const initialState = {
  fetching: false,
  fetched: false,
  pokemons: [],
  filter: {
    show: false,
    weight: {
      min: 0,
      max: 9999999,
    },
    height: {
      min: 0,
      max: 9999999,
    },
    type: [],
    abilities: [],
    weakness: []
  },
  filterData: {
    weight: {
      min: 0,
      max: 9999999,
    },
    height: {
      min: 0,
      max: 9999999,
    },
    type: [],
    abilities: [],
    weakness: []
  },
  error: null
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case 'FETCH_' + ARRAY_NAME: {
      return {...state, fetching: true}
    }
    case 'FETCH_' + ARRAY_NAME + '_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_' + ARRAY_NAME + '_FULFILLED': {
      let pokemons = mapPokemons(action.payload);

      return {
        ...state,
        fetching: false,
        fetched: true,
        pokemons: pokemons,
      }
    }
    case 'TOGGLE_' + ARRAY_NAME + '_FILTER': {
      return {...state, filter: {...state.filter, show: action.payload}};
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
