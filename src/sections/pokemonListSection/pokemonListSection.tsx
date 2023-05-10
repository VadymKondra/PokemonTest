import { PokemonCard } from "./views/pokemonCardView";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { PokemonDetailedCardView } from "./views/pokemonDetailedCardView";


export const PokemonListSection = ({ data }) => {
  const [chosenPokemon, setChosenPokemon] = useState(null);
  const [filterType, setFilterType] = useState(null)

  return (
    <>
      <Typography margin='1.25rem' variant="h2" gutterBottom>
        filtered by {filterType ? filterType : 'none'}
      </Typography>
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
                        filterType={filterType}
                        setChosenPokemon = {setChosenPokemon}
                        setFilterType = {setFilterType}
                        pokemon={pokemon}
                      />
                  </Box>
                </Grid>
                ) 
              }


            }
            return (
              <Grid key={pokemon.name + index} item sm={4}>
                <Box>

                    <PokemonCard
                      filterType={filterType}
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
          <PokemonDetailedCardView
            pokemon={chosenPokemon}
          />
        )}
      </Grid>
    </Grid>
    </>
    
  );
};
