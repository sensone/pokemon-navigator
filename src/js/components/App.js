import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Header from '../blocks/Header';

export default function App({ pushPath, children }) {
  return <div class="wrapper">
    <Header/>
      {children}
    <footer>hh</footer>
  </div>
}
