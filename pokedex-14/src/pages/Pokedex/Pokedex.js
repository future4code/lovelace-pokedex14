import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete'
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './PokedexStyles'
import { Image, ContainerPokemons, CardPokemon } from './PokedexStyledComp';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GlobalStateContext from '../../global/GlobalStateContext';
import { PokedexCard } from './PokedexCard';


export const Pokedex = () => {
const {state, setters, requests} = useContext(GlobalStateContext)
const history= useHistory()

const goToDetailsPoke = () =>{
    history.push('/details/:nome')
}

const goBackTolistPoke = () =>{
    history.push('/')
}


const renderPokedex = () => {
    if (state.pokedex.length === 0){
      return <h1>Pokedex vazia</h1>
    }

    return state.pokedex && state.pokedex.map((pokemon) => {
        <PokedexCard pokemon={pokemon} key={pokemon.name}/>
    })

}

  return (
    <div>
   <ThemeProvider theme={theme}>

   <Image src={'https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png'} alt={'pokedex'} />

    {renderPokedex()}

    {/* <ContainerPokemons>
   <CardPokemon >
      <CardActionArea>
        <CardMedia
        
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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

    <CardPokemon >
      <CardActionArea>
        <CardMedia
        
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
        </ContainerPokemons> */}

        <Button variant="outlined" color="link" onClick={goBackTolistPoke}>
  Voltar Para a Home
</Button>

   </ThemeProvider>
    </div>
  );
}


////Home ?? a Lista de pokemons, onde tem a foto dos Pokemons, os botoes Adicionar a Pokedex, Ver detalhes e o botao no Header Ir para pokedex///

//// Pokedex ?? aonde ficam os pokemons adicionados da lista de pokemons 'home', aonde possui a foto do pokemon mais um botao de remover pokemon e outro ver detalhes do pokemon, que direciona a 'details page' e um botao de voltar a lista de pokemons

///Details Page ?? aonde possui os detalhes do pokemon, como ataques, poderes e foto. Al??m de dois bot??es, um Ir para pokedex e outro voltar//