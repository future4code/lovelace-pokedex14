import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useRequestData from '../../hooks/useRequestData';


export const Home = () => {
  const history = useHistory()

  const goToPokedex = () => {
    history.push('/pokedex')
  }
  const goToDetailsPoke = (name) => {
    history.push(`/details/${name}`)
  }

 const pokemonsList = useRequestData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",{})

 

const pokemonsComponents = pokemonsList.results && pokemonsList.results.map((poke)=>{
  return  <button onClick = {()=> goToDetailsPoke(poke.name)} key={poke.name}>{poke.name}</button>
})
console.log(pokemonsList)
  return (
    <div>
      
       <Button onClick={goToPokedex} variant="contained" color="primary">
        Ir Para Pokedex
      </Button>
       <img height={150} src={"https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pok%C3%A9mon-Com-Fundo-Transparente-1280x720.png"} />
      <div>{pokemonsComponents}</div>
      <Button variant="contained" color="secondary">
        Adicionar a Pokedex
      </Button>
      <Button onClick={goToDetailsPoke} variant="contained" color="primary">
        Ver Detalhes
      </Button>
    </div>
  );
}


////Home é a Lista de pokemons, onde tem a foto dos Pokemons, os botoes Adicionar a Pokedex, Ver detalhes e o botao no Header Ir para pokedex///


///Details Page é aonde possui os detalhes do pokemon, como ataques, poderes e foto. Além de dois botões, um Ir para pokedex e outro voltar

//// Pokedex é aonde ficam os pokemons adicionados da lista de pokemons 'home', aonde possui a foto do pokemon mais um botao de remover pokemon e outro ver detalhes do pokemon, que direciona a 'details page' e um botao de voltar a lista de pokemons