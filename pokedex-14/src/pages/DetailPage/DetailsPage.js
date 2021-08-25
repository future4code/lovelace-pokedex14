import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { ImagesDiv, StatsDiv, MoveDiv, TypeDiv, ContainerDetails, ContainerTypeMoves } from './DetailStyles'
import Button from '@material-ui/core/Button';
import useRequestData from '../../hooks/useRequestData';

export const DetailsPage = () => {
  const history = useHistory()

  const goToPokedex = () =>{
      history.push('/pokedex')
  }
  const goToBack = ()=>{
      history.goBack()
  }
  
const params = useParams()

const pokemon = useRequestData(`https://pokeapi.co/api/v2/pokemon/${params.nome}`,{})
console.log(pokemon)


    return (
    <div>
    <h1>Detalhes Pokemons</h1>

    <ContainerDetails>

    <ImagesDiv>
    {pokemon.name && <h1>{pokemon.name}</h1>}
    {pokemon.sprites && pokemon.sprites.front_default && (<img src={pokemon.sprites.front_default} alt={'pokemon'} />)}
    {pokemon.sprites && pokemon.sprites.back_default && (<img src={pokemon.sprites.back_default} alt={'pokemon'} />)}
    </ImagesDiv>

    <StatsDiv>
      <p>HP:{pokemon.stats && pokemon.stats[0].base_stat && (<h4>{pokemon.stats[0].base_stat}</h4>)}</p>
      <p>Attack:{pokemon.stats && pokemon.stats[1].base_stat && (<h4>{pokemon.stats[1].base_stat}</h4>)}</p>
      <p>Defense:{pokemon.stats && pokemon.stats[2].base_stat && (<h4>{pokemon.stats[2].base_stat}</h4>)}</p>
      <p>Special-Attack:{pokemon.stats && pokemon.stats[3].base_stat && (<h4>{pokemon.stats[3].base_stat}</h4>)}</p>
      <p>Special-defence:{pokemon.stats && pokemon.stats[4].base_stat && (<h4>{pokemon.stats[4].base_stat}</h4>)}</p>
      <p>Speed:{pokemon.stats && pokemon.stats[5].base_stat && (<h4>{pokemon.stats[5].base_stat}</h4>)}</p>
    </StatsDiv>

    <ContainerTypeMoves>
      <TypeDiv>
        <p>Types:{pokemon.types && pokemon.types[0].type.name && [<p>{pokemon.types[0].type.name}</p>]}</p>
      </TypeDiv>
      
      <MoveDiv>
      <h1>Moves</h1>
        <p>{pokemon.moves && pokemon.moves[0].move.name && (<h4>{pokemon.moves[0].move.name}</h4>)}</p>
        <p>{pokemon.moves && pokemon.moves[1].move.name && (<h4>{pokemon.moves[1].move.name}</h4>)}</p>
        <p>{pokemon.moves && pokemon.moves[2].move.name && (<h4>{pokemon.moves[2].move.name}</h4>)}</p>
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

