import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DetailsPage } from '../pages/DetailPage/DetailsPage'
import { Home } from '../pages/Home/Home'
import { Pokedex } from '../pages/Pokedex/Pokedex'

export const Router = () => {
    return (

        <BrowserRouter>
            <Switch>

                <Route exact path={'/pokedex'}  >
                    <Pokedex />
                </Route>

                <Route exact path={'/details/:nome'}  >
                    <DetailsPage />
                </Route>

                <Route exact path={'/'}>
                    <Home />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}



////Home é a Lista de pokemons, onde tem a foto dos Pokemons, os botoes Adicionar a Pokedex, Ver detalhes e o botao no Header Ir para pokedex///


///Details Page é aonde possui os detalhes do pokemon, como ataques, poderes e foto. Além de dois botões, um Ir para pokedex e outro voltar

//// Pokedex é aonde ficam os pokemons adicionados da lista de pokemons 'home', aonde possui a foto do pokemon mais um botao de remover pokemon e outro ver detalhes do pokemon, que direciona a 'details page' e um botao de voltar a lista de pokemons