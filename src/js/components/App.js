import React from 'react';

import Header from '../blocks/Header';
import Footer from '../blocks/Footer';


export default function App({ pushPath, children }) {
  return <div class="wrapper">
    <Header/>
      {children}
    <Footer />
  </div>
}
