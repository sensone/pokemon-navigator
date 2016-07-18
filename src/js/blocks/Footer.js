import React from 'react';
import { connect } from 'react-redux';
import template from './Footer.rt';
import './Footer.less';

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  toggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return template.call(this);
  }
}
