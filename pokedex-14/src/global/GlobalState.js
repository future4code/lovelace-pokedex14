import React, { useState } from"react"
import GlobalStateContext from "./GlobalStateContext"

export const GlobalState = (props) => {
    const [pokedex, setpokedex] = useState([])

    const addToPokedex = (pokemon) => {
        const newPokemon = { ...pokemon }
        const newPokedex = [ ...pokedex, newPokemon]
        setpokedex(newPokedex)

        console.log('pokedex', pokedex)
    }


    const state = { pokedex };
    const setters = { addToPokedex };
    const requests = {};

    return(
        <GlobalStateContext.Provider value={{ state, setters, requests }}>
        {props.children}
      </GlobalStateContext.Provider>
    )
}