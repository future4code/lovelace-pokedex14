import React, { useContext } from "react"
import { useHistory } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import { ButtonDetails } from "./HomeStylesMaterial";
// import Box from '@material-ui/core/Box';
import { ContainerCardHome, ImageCardPokemon } from "./HomeStyles";
import GlobalStateContext from "../../global/GlobalStateContext";

export default function CardPokemonHome(props) {
    const {state, setters, requests} = useContext(GlobalStateContext)
    const history = useHistory()

    const goToDetailsPoke = (name) => {
        history.push(`/details/${name}`)
    }

    const pokemon = useRequestData(`https://pokeapi.co/api/v2/pokemon/${props.name}`, {})

    return (
        <ContainerCardHome>
            {/* {pokemon.sprites && pokemon.sprites.front_default && (<img src={pokemon.sprites.front_default} alt={'pokemon'} />)}
            <button onClick = {()=> goToDetailsPoke(pokemon.name)} key={pokemon.name}>{pokemon.name}</button> */}


            <CardActionArea>
                {/* <CardMedia
                /> */}
                <CardContent>
                {pokemon.sprites && pokemon.sprites.other.dream_world.front_default && (<ImageCardPokemon src={pokemon.sprites.other.dream_world.front_default} alt={'pokemon'} />)}
                    <Typography gutterBottom variant="h5" component="h2">
                        {pokemon.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ButtonDetails size="small" color="primary" variant="outlined" onClick={() => goToDetailsPoke(pokemon.name)} key={pokemon.name}>
                        Detalhes
                    </ButtonDetails>
                    <ButtonDetails size="small" color="primary" variant="contained" onClick={() => setters.addToPokedex(pokemon)} key={pokemon.name}>
                        Adicionar à pokedex
                    </ButtonDetails>
                </CardActions>
            </CardActionArea>



        </ContainerCardHome>
    )

}