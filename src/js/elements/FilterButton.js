import React from 'react';
import { connect } from 'react-redux';
import template from './FilterButton.rt';
import './FilterButton.less';

import { tooglePokemonsFilter } from '../actions/pokemonsActions';

@connect((store) => {
  return {};
})

export default class FilterButton extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  toggle() {
    //this.setState({open: !this.props.showFilter});
    this.props.dispatch(tooglePokemonsFilter(!this.props.showFilter));
  }

  render() {
    return template.call(this);
  }
}
