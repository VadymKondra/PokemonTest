import * as React from 'react';
import {FC} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useQuery  } from '@tanstack/react-query'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Button, Grid } from '@mui/material';
import axios from "axios";
import {useState, useEffect} from 'react'
import {PokemonSectionView} from '../pokemonListSection'

export const PokemonListWrapper = () => {


    
    const [pokemons, setPokemons] = useState ([]) 
    const {isLoading } =  useQuery({
        queryKey: ["pokemonMain"],
        queryFn: async() => {
           const pokemons = await createPokeArrayQuery().then((res) => res)
           setPokemons(pokemons)
           return pokemons
        },
        staleTime: Infinity,
        cacheTime: Infinity    
    },
    );


    if(isLoading) {
        return(<Typography>Loading...</Typography>)
    }

    console.log('isLoading1', isLoading)
    console.log('data1', pokemons   )

    return (
        <Grid container spacing={2} columns={12}>
                <PokemonSectionView isLoaded={isLoading} data = {pokemons}/>
        </Grid>
)
}


const createPokeArrayQuery = async () =>{
    const pokeArray = Array.from({length: 12}, () => Math.floor(Math.random()* 100)+1)
    const pokeInfo = [] 
    pokeArray.forEach((pokeId) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).then((res)=>{
            pokeInfo.push(res.data)
        })
    });
    return pokeInfo
}