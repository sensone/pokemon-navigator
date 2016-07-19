import React from 'react';

import PokemonsList from '../blocks/PokemonsList';

export default function PokemonsListPage({ pushPath, children }) {
  return <section class="container">
    <PokemonsList />
  </section>
}
