import { PokemonCard } from "./pokemonListSection/views/pokemonCardView";
import { useState } from "react";
import { Box, CardActionArea } from "@mui/material";
import "../App.css";
import Grid from "@mui/material/Grid";

type pokemonType = {
  name: string;
  types: Array<string>;
  stats: { name: string; value: number }[];
  totalMoves: number;
  weight: number;
  sprite: string;
};

export const PokemonSectionView = ({ data }) => {
  const [chosenPokemon, setChosenPokemon] = useState(null);
  const [filterType, setFilterType] = useState(null)

  return (
    <Grid container columns={2} justifyContent={"center"} alignItems={"center"}>
      <Grid item sm={1}>
        <Grid container spacing={2} columns={12}>
          {data.map((pokemon, index) => {
            if(filterType) {
              if(pokemon.types.includes(filterType)){
                return (
                  <Grid key={pokemon.name + index} item sm={4}>
                  <Box>
  
                      <PokemonCard
                        setChosenPokemon = {setChosenPokemon}
                        setFilterType = {setFilterType}
                        pokemon={pokemon}
                      />
                  </Box>
                </Grid>
                ) 
              }
              else{
                return
              }


            }
            return (
              <Grid key={pokemon.name + index} item sm={4}>
                <Box>

                    <PokemonCard
                      setChosenPokemon = {setChosenPokemon}
                      setFilterType = {setFilterType}
                      pokemon={pokemon}
                    />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item justifySelf={'center'} sm={1} xs ={2}>
        {chosenPokemon && (
          <PokemonCard
            pokemon={chosenPokemon}
            setChosenPokemon={() => console.log('hello')}
            setFilterType={() => console.log('set up me!')}
          />
        )}
      </Grid>
    </Grid>
  );
};
