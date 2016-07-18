import React from 'react';
import { connect } from 'react-redux';
import template from './Header.rt';
import './Header.less';

@connect((store) => {
  return {
    route: store.routing.locationBeforeTransitions,
  };
})

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      pages: [
        {
          name: 'Articles',
          url: '/articles'
        },
        {
          name: 'Pokemons list',
          url: '/pokemons-list'
        }
      ]
    };
  }
  render() {
    return template.call(this);
  }
}
