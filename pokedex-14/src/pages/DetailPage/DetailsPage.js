import React from 'react'
import { useHistory } from 'react-router-dom';
import { ImagesDiv, StatsDiv, MoveDiv, TypeDiv, ContainerDetails, ContainerTypeMoves } from './DetailStyles'
import Button from '@material-ui/core/Button';

export const DetailsPage = () => {
  const history = useHistory()


  const goToPokedex = () =>{
      history.push('/pokedex')
  }
  const goToBack = ()=>{
      history.goBack()
  }
  
    return (
    <div>
    <h1>Detalhes Pokemons</h1>

    <ContainerDetails>

    <ImagesDiv>

    <img src={'https://static.pokemonpets.com/images/monsters-images-800-800/253-Grovyle.webp'} alt={'pokemon'} />
    <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/493.png'} alt={'pokemon'} />

    </ImagesDiv>

    <StatsDiv>
      <p>HP</p>
      <p>Attack</p>
      <p>Defense</p>
      <p>Special-Attack</p>
      <p>Special-defence</p>
      <p>Speed</p>
    </StatsDiv>

    <ContainerTypeMoves>
      <TypeDiv>
        <p> TYPE 1 / TYPE 2</p>
      </TypeDiv>
      
      <MoveDiv>
        <h4>Moves</h4>
        <p> Move name 1</p>
        <p> Move name 2</p>
        <p> Move name 3</p>
      </MoveDiv>
    </ContainerTypeMoves>

    </ContainerDetails>

    <Button variant="outlined" color="link" onClick = {goToPokedex}>Ir para Pokedex</Button>
    <Button variant="outlined" color="link" onClick = {goToBack}>Voltar</Button>
    </div>
  );
}
////Home é a Lista de pokemons, onde tem a foto dos Pokemons, os botoes Adicionar a Pokedex, Ver detalhes e o botao no Header Ir para pokedex///


///Details Page é aonde possui os detalhes do pokemon, como ataques, poderes e foto. Além de dois botões, um Ir para pokedex e outro voltar

//// Pokedex é aonde ficam os pokemons adicionados da lista de pokemons 'home', aonde possui a foto do pokemon mais um botao de remover pokemon e outro ver detalhes do pokemon, que direciona a 'details page' e um botao de voltar a lista de pokemons

