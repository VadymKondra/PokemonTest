import { FC } from "react";
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
  pokemonName: string;
  spriteFront: string;
  types: any;
};

export const PokemonCard: FC<PokemonCardProps> = ({
  pokemonName,
  spriteFront,
  types,
}) => {
  return (
    <Box
      margin="1rem"
      bgcolor={"white"}
      minWidth={100}
      maxWidth={280}
      height={350}
    >
      <CardContent>
        <CardMedia
          sx={{ height: 200 }}
          image={spriteFront}
          title={pokemonName}
        />
        <Typography color={"black"}>{pokemonName}</Typography>
        <Grid justifyContent={"center"} container spacing={2} columns={6}>
          {types.map((type) => {
            return (
              <Grid key={type.type.name} item sm={2}>
                <Box
                  sx={{
                    background: `linear-gradient(to right top, ${
                      pokemonTypesColors[type.type.name]
                    }, white)`,
                  }}
                >
                  <Typography color={"black"}>{type.type.name}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Box>
  );
};
