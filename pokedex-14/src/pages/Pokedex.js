import React from 'react'
import { useHistory } from 'react-router-dom';

export const Pokedex = () => {
const history= useHistory()

const goToDetailsPoke = () =>{
    history.push('/pokedex')
}

const goBackTolistPoke = () =>{
    history.push('/')
}

  return (
    <div>
   <h1>Pokedex</h1>
   <button> Remover Pokemon </button>
   <button onClick = {goToDetailsPoke}>Ver detalhes Pokemon</button>
   <button onClick = {goBackTolistPoke}> Voltar a Lista de Pokemons</button>
    </div>
  );
}


////Home é a Lista de pokemons, onde tem a foto dos Pokemons, os botoes Adicionar a Pokedex, Ver detalhes e o botao no Header Ir para pokedex///

//// Pokedex é aonde ficam os pokemons adicionados da lista de pokemons 'home', aonde possui a foto do pokemon mais um botao de remover pokemon e outro ver detalhes do pokemon, que direciona a 'details page' e um botao de voltar a lista de pokemons

///Details Page é aonde possui os detalhes do pokemon, como ataques, poderes e foto. Além de dois botões, um Ir para pokedex e outro voltar//