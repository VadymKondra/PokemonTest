import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import { PokemonSectionView } from "../pokemonListSection";

export const PokemonListWrapper = () => {


  const { pokemons, isLoading, refetch } = usePokemonListWrapperContent()
  const handleClick = () => {
    refetch();
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }




  return (
    <>
      <Grid container spacing={2} columns={12}>
        <PokemonSectionView data={pokemons} />
      </Grid>
      <Button onClick={handleClick}>Click me!</Button>
    </>
  );
};


const usePokemonListWrapperContent = () =>{
    const pokeArray = Array.from({ length: 12 }, () =>
    axios.get(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 100) + 1}`
    )
  );
  let pokemons = []
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["pokemonMain15"],
    queryFn: () =>
      axios.all(pokeArray).then((res) => {
        console.log("res1", res);
        return res;
      }),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  if(!isLoading) {
    pokemons = data.map((pokemonResponse) => {
        const pokemon = {
            name: pokemonResponse.data.name,
            types: pokemonResponse.data.types.map((type) =>  type.type.name),
            stats: pokemonResponse.data.stats.map((stat) => {
                return {
                    name: stat.stat.name,
                    value: stat.base_stat
                }
            }),
            height: pokemonResponse.data.height,
            weight: pokemonResponse.data.weight
        }
        console.log('pokemonDetailed1', pokemon)
        return pokemonResponse.data;
  });
  console.log('pokemons1', pokemons)

  }
   
  return {
    pokemons: !isLoading ? pokemons : [],
    isLoading,
    refetch
  }


}