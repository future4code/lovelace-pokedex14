import React from 'react'
import { useHistory } from 'react-router-dom';

export const Home = () => {
    const history = useHistory()
 
    const goToPokedex = () =>{
        history.push('/pokedex')
    }
    const goToDetailsPoke = () =>{
        history.push('/pokedex/id')
    }


  return (
    <div>
      <h1>Lista de Pokemons</h1>
      <button onClick = {goToPokedex}> Ir Para Pokedex</button>
      <button> Adicionar a Pokedex </button>
      <button onClick = {goToDetailsPoke}> Ver Detalhes </button>
    </div>
  );
}


////Home é a Lista de pokemons, onde tem a foto dos Pokemons, os botoes Adicionar a Pokedex, Ver detalhes e o botao no Header Ir para pokedex///


///Details Page é aonde possui os detalhes do pokemon, como ataques, poderes e foto. Além de dois botões, um Ir para pokedex e outro voltar

//// Pokedex é aonde ficam os pokemons adicionados da lista de pokemons 'home', aonde possui a foto do pokemon mais um botao de remover pokemon e outro ver detalhes do pokemon, que direciona a 'details page' e um botao de voltar a lista de pokemons