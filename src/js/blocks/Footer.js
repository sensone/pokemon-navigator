import React from 'react';
import { connect } from 'react-redux';
import template from './Footer.rt';
import './Footer.less';

import { tooglePokemonsFilter } from '../actions/pokemonsActions';

@connect((store) => {
  return {
    showFilter: store.pokemons.filter.show
  };
})

export default class Footer extends React.Component {
  toggle() {
    this.props.dispatch(tooglePokemonsFilter(!this.props.showFilter));
  }

  render() {
    return template.call(this);
  }
}
