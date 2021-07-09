import React, { createContext, useCallback, useContext, useState } from "react"
import { useDispatch } from "react-redux"

const PokemonContext = createContext(null)

export function PokemonProvider({user, children}) {
  //const dispatch = useDispatch()
  const [userData, setUserData] = useState(user)

  return (
    <PokemonContext.Provider value={{userData, setUserData}}>
      {children}
    </PokemonContext.Provider>
  )
}

export default usePokemon = () => useContext(PokemonContext)