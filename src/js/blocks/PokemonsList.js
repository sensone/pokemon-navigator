import React from 'react';
import { connect } from 'react-redux';
import template from './PokemonsList.rt';
import './PokemonsList.less';

import { fetchPokemons } from '../actions/pokemonsActions';

@connect((store) => {
  return {
    pokemons: store.pokemons.pokemons,
    fetching: store.pokemons.fetching,
    fetched: store.pokemons.fetched,
    error: store.pokemons.error
  };
})

export default class PokemonsList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchPokemons());
  }

  render() {
    return template.call(this);
  }
}
