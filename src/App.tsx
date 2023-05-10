import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokemonListWrapper } from "./sections/pokemonListSection/pokemonListWrapper";

import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <header className="App-header">
        <QueryClientProvider client={queryClient}>
          <PokemonListWrapper />
        </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;
