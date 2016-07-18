import axios from 'axios';
import ARRAY_NAME from '../constants/pokemons';
import ITEM_NAME from '../constants/pokemons';

export function fetchPokemons() {
  return function(dispatch) {
    dispatch({type: 'FETCH_' + ARRAY_NAME});
    axios.get('http://localhost:8000/data.json')
      .then((response) => {
        dispatch({type: 'FETCH_' + ARRAY_NAME + '_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_' + ARRAY_NAME + '_REJECTED', payload: err});
      });
  }
}
