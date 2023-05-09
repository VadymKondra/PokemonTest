import {PokemonCard} from './pokemonListSection/views/pokemonCardView'
import {useState, useEffect} from 'react'
import {Box, CardActionArea, Typography} from '@mui/material'
import '../App.css';
import axios from "axios";
import Grid from '@mui/material/Grid';

type pokemonType = {
    name: string,
    types: Array<string>
    stats: {name: string, value: number}[],
    totalMoves: number,
    weight: number,
    sprite: string
}

 export const PokemonSectionView = ( {data, isLoaded} ) =>{
  
  const [pokemons, setPokemons] = useState(data)

  useEffect( () => {
    setPokemons(data)
  }, [data, isLoaded])

  if(isLoaded) {
    return (<Typography>Loading...</Typography>)
  }


  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={2} columns={12}>
          {pokemons.map((pokemon, index) => {
              return (
              <Grid key={pokemon.name+index} item sm={4}>
                <Box>
                <CardActionArea> 
                  <PokemonCard pokemonName={pokemon.name} spriteFront={pokemon.sprites.front_default} types={pokemon.types} />
                  </CardActionArea>
                </Box> 
              </Grid>
              )
          })}
        </Grid>
      </header>
    </div>

  );
}


// const usePokemonsData = () =>{

//     if(!isLoading) {
//         const pokemonsList = []
//         console.log('data2', test)
//         test.results.forEach((singlePokemon) => {
//             const pokemonDetails:pokemonType = {name: singlePokemon.name, types: [], stats: [], weight: 0, totalMoves: 0, sprite: ''}
//              SinglePokemonData( pokemonDetails, singlePokemon.url)
//             pokemonsList.push(pokemonDetails)
//         })
//         return pokemonsList;
//     }
//     return []
//   }


