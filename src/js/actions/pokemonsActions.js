import axios from 'axios';
import { ARRAY_NAME, ITEM_NAME } from '../constants/pokemons';

export function fetchPokemons() {
  return function(dispatch) {
    dispatch({type: 'FETCH_' + ARRAY_NAME});
    axios.get('http://localhost:8000/data2.json')
      .then((response) => {
        dispatch({type: 'FETCH_' + ARRAY_NAME + '_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_' + ARRAY_NAME + '_REJECTED', payload: err});
      });
  }
}

export function tooglePokemonsFilter(show) {
  return {
    type: 'TOGGLE_' + ARRAY_NAME + '_FILTER',
    payload: show
  }
}
