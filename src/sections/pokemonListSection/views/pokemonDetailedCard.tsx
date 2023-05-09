import * as React from 'react';
import {FC} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useQuery  } from '@tanstack/react-query'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Grid } from '@mui/material';
import axios from "axios";


// const pokemonTypesColors = {
//     normal: '#A8A878',
//     fire: '#F08030',
//     water: '#6890F0', 
//     grass: '#78C850',
//     electric: '#F8D030',
//     ice: '#98D8D8',
//     fighting: '#C03028',
//     poison: '#A040A0',
//     ground: '#E0C068',
//     flying: '#A890F0',
//     psychic: '#F85888',
//     bug:'#A8B820',
//     rock: '#B8A038',
//     ghost: '#705898',
//     dark: '#705848',
//     dragon: '#7038F8',
//     steel: '#B8B8D0',
//     fairy: 'F0B6BC'
// }

// type PokemonCardProps = {
//     pokemonUrl: string,
//     pokemonName: string
// }

// export const PokemonCard: FC<PokemonCardProps> = ({pokemonUrl}) => {
//     console.log('url1', pokemonUrl)
//     const { data, isLoading } =  useQuery({
//         queryKey: ["pokemonDetails"+pokemonName],
//         queryFn: () =>
//           axios
//             .get(pokemonUrl)
//             .then((res) => res.data),
//       });
//     if(isLoading) {
//         return (<Typography>Loading</Typography>)
//     }
    
    
    

//     return (
//         <Box margin='1rem' bgcolor={'white'} maxWidth={280} height={350}>
           

//             <CardContent>
//                     <CardMedia
//                                 sx={{ height: 200 }}
//                                 image= {data.sprites.front_default}
//                                 title= {pokemonName}
                        
//                     />
//                     <Typography color={'black'} >
//                         {pokemonName}
//                     </Typography>
//                     <Grid justifyContent={'center'} container spacing={2} columns={6}>
//                     {data.types.map((type)=>{
//                         console.log('type1', type.type.name)
//                             return(

//                                 <Grid item sm={2}>
//                                     <Box sx={{background: `linear-gradient(to right top, ${pokemonTypesColors[type.type.name]}, white)`}}>
//                                     <Typography color={'black'}>
//                                 {type.type.name}
//                                     </Typography>
//                                     </Box> 
//                                 </Grid>
        
//                             )
//                         })}
//                     </Grid>
//             </CardContent>
//         </Box>
//     )
// }