import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {FC} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';

type PokemonCardProps = {
    pokemon: {
        name: string,
        img: string,
        types: Array<string>
        stats: {value: number, name: string}[]
        height: number,
        weight: number,
      }
}

export const PokemonDetailedCardView: FC<PokemonCardProps> = ({pokemon}) => {
    return (
        <Box margin='1rem'>
         <Card sx={{ maxWidth: 345, minHeight: 600 }}>
            <CardMedia
            sx={{ height: 300 }}
            image={pokemon.img}
            title={pokemon.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pokemon.name}
                </Typography>
                <Table>
                <TableBody>
                {pokemon.types.map((type)=>{
                        return(

                            <TableRow key={type}>
                                <TableCell colSpan={2} align='center'>
                            {type}
                                </TableCell>
                            </TableRow>

                        )
                    })}
                                    {pokemon.stats.map((stat)=>{
                        return(
                            <TableRow key={stat.name}>
                                <TableCell>{stat.name}</TableCell>
                                <TableCell>{stat.value}</TableCell>
                            </TableRow>
                        )
                    })}
                    <TableRow>
                        <TableCell>height</TableCell>
                        <TableCell>{pokemon.height}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>weight</TableCell>
                        <TableCell>{pokemon.weight}</TableCell>
                    </TableRow>
            </TableBody>
                </Table> 
        </CardContent>
        </Card>
        </Box>
    )
}