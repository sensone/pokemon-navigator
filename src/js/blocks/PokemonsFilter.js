import React from 'react';
import { connect } from 'react-redux';
import template from './PokemonsFilter.rt';
import './PokemonsFilter.less';

@connect((store) => {
  return {
    pokemons: store.pokemons.pokemons,
    fetching: store.pokemons.fetching,
    fetched: store.pokemons.fetched,
    error: store.pokemons.error
  };
})

export default class PokemonsFilter extends React.Component {
  render() {
    return template.call(this);
  }
}
