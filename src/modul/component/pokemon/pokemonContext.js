import React, { createContext, useCallback, useContext, useState } from "react"
import { useDispatch } from "react-redux"

const PokemonContext = createContext(null)

export function PokemonProvider({children, urlDetail}) {
  //const dispatch = useDispatch()
  const [detailData, setDetailData] = useState(urlDetail)

  // const detailPokemonAPI = useCallback(() => {
  //   dispatch(getDetailPokemon(urlDetail)) // context
  //   .then(rsp => {
  //     console.log('rsp---->', rsp)
  //     //context setup
  //     //setup to redux
  //   })
  //   .catch(err => console.log('err---->', err))
  // })

  return (
    <PokemonContext.Provider value={{detailData, setDetailData}}>
      {children}
    </PokemonContext.Provider>
  )
}

export default usePokemon = () => useContext(PokemonContext)