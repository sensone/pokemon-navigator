import React from 'react';
import { connect } from 'react-redux';
import template from './Header.rt';
import './Header.less';

export default class Header extends React.Component {
  render() {
    return template();
  }
}
