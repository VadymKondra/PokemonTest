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
  const [chosenPokemon, setChosenPokemon] = useState({
    name: "",
    sprites: { front_default: "" },
    types: [],
  });

  return (
    <Grid container columns={3} justifyContent={"center"} alignItems={"center"}>
      <Grid item sm={1}>
        <Grid container spacing={2} columns={12}>
          {data.map((pokemon, index) => {
            return (
              <Grid key={pokemon.name + index} item sm={4}>
                <Box>
                  <CardActionArea
                    onClick={() => {
                      setChosenPokemon(pokemon);
                    }}
                  >
                    <PokemonCard
                      pokemonName={pokemon.name}
                      spriteFront={pokemon.sprites.front_default}
                      types={pokemon.types}
                    />
                  </CardActionArea>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item sm={1}>
        {chosenPokemon && (
          <PokemonCard
            pokemonName={chosenPokemon.name}
            spriteFront={chosenPokemon.sprites.front_default}
            types={chosenPokemon.types}
          />
        )}
      </Grid>
    </Grid>
  );
};
