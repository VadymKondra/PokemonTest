import { Dispatch, FC } from "react";
import {Box, CardActionArea} from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";

const pokemonTypesColors = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dark: "#705848",
  dragon: "#7038F8",
  steel: "#B8B8D0",
  fairy: "#F0B6BC",
};

type PokemonCardProps = {
  pokemon: {
    name: string,
    img: string,
    types: Array<string>
  }
  setChosenPokemon: Dispatch<any>;
  setFilterType: Dispatch<any>;
  filterType: string
};

export const PokemonCard: FC<PokemonCardProps> = ({
  pokemon,
  setChosenPokemon,
  setFilterType,
  filterType
}) => {
  return (
    <Box
      margin="1rem"
      bgcolor={"white"}
      minWidth={250}
      maxWidth={280}
      height={350}
    >
      <CardContent>
        <CardActionArea onClick={() => setChosenPokemon(pokemon)}>
            <CardMedia
            sx={{ height: 200 }}
            image={pokemon.img}
            title={pokemon.name}
            />
        </CardActionArea>
        <Typography color={"black"}>{pokemon.name}</Typography>
        <Grid justifyContent={"center"} container spacing={2} columns={6}>
          {pokemon.types.map((type) => {
            return (
              <Grid key={type} item sm={2}>
                <Box>
                    <CardActionArea onClick={() => 
                        {
                            if(filterType === type) {
                                setFilterType(null)
                            }
                            else{
                                setFilterType(type)
                            }
                        }
                        }>
                    <Typography                   sx={{
                    background: `linear-gradient(to right top, ${
                      pokemonTypesColors[type]
                    }, white)`,
                  }} color={"black"}>{type}</Typography>
                    </CardActionArea>

                </Box>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Box>
  );
};
