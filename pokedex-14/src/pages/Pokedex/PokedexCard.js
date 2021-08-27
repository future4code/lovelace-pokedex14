import React from "react"
import { Image, ContainerPokemons, CardPokemon } from './PokedexStyledComp';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete'


export const PokedexCard = (props) => {
    const history= useHistory()

    const goToDetailsPoke = () =>{
        history.push('/details/:nome')
    }

    return(<ContainerPokemons>
        <CardPokemon >
           <CardActionArea>
             <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                 {props.pokemon.name}
               </Typography>
             </CardContent>
           </CardActionArea>
           <CardActions>
             <Button size="small" color="link" onClick={goToDetailsPoke}>
               Detalhes
             </Button>
             <Button size="small" color="secondary">
               Excluir
               <DeleteIcon />
             </Button>
           </CardActions>
         </CardPokemon>
             </ContainerPokemons>
             )
}