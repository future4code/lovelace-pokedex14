import React from 'react'
import { useHistory } from 'react-router-dom';

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
    <button onClick = {goToPokedex}>Ir para Pokedex</button>
    <button onClick = {goToBack}>Voltar</button>
    </div>
  );
}
////Home é a Lista de pokemons, onde tem a foto dos Pokemons, os botoes Adicionar a Pokedex, Ver detalhes e o botao no Header Ir para pokedex///


///Details Page é aonde possui os detalhes do pokemon, como ataques, poderes e foto. Além de dois botões, um Ir para pokedex e outro voltar

//// Pokedex é aonde ficam os pokemons adicionados da lista de pokemons 'home', aonde possui a foto do pokemon mais um botao de remover pokemon e outro ver detalhes do pokemon, que direciona a 'details page' e um botao de voltar a lista de pokemons

