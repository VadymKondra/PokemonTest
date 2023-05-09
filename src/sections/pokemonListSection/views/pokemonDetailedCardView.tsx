import * as React from 'react';
import {FC} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';

type PokemonCardProps = {
    pokemonName: string,
    pokemonTypes: Array<string>,
    pokemonStats: {name: string, value: number}[],
    pokemonWeight: number,
    pokemonMoves: number
}

export const PokemonCard: FC<PokemonCardProps> = ({pokemonName, pokemonTypes, pokemonStats, pokemonWeight, pokemonMoves}) => {
    return (
        <Box margin='1rem'>
         <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pokemonName}
                </Typography>
                <Grid key={pokemonName} justifyContent={'center'} container spacing={2} columns={6}>
                {pokemonTypes.map((type)=>{
                        return(

                            <Grid key={type} item sm={2}>
                                <Typography>
                            {type}
                                </Typography>
                            </Grid>

                        )
                    })}
                </Grid>
        
                    {pokemonStats.map((stat)=>{
                        return(
                            <Typography>{stat.name} - {stat.value}</Typography>
                        )
                    })}
        </CardContent>
        </Card>
        </Box>
    )
}