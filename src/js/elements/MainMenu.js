import React from 'react';
import { connect } from 'react-redux';
import template from './MainMenu.rt';
import './MainMenu.less';

@connect((store) => {
  return {
    route: store.routing.locationBeforeTransitions,
  };
})

export default class MainMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      pages: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Foo',
          url: '/foo'
        },
        {
          name: 'Bar',
          url: '/bar'
        }
      ]
    };
  }

  toggleOpen() {
    this.setState({open: !this.state.open});
  }

  render() {
    return template.call(this);
  }
}
