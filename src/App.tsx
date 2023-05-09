import React from 'react';
import {QueryClient, QueryClientProvider  } from '@tanstack/react-query'
import {PokemonListWrapper} from './sections/pokemonListSection/pokemonListWrapper'

import './App.css';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonListWrapper/>
    </QueryClientProvider>

  );
}

export default App;


