import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';


export const Home = () => {
  const history = useHistory()

  const goToPokedex = () => {
    history.push('/pokedex')
  }
  const goToDetailsPoke = () => {
    history.push('/pokedex/id')
  }


  return (
    <div>

       <img height={150} src={"https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pok%C3%A9mon-Com-Fundo-Transparente-1280x720.png"} />
      
      <Button onClick={goToPokedex} variant="contained" color="primary">
        Ir Para Pokedex
      </Button>
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