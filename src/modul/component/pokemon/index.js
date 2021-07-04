import React, {useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
// import { useDispatch } from 'react-redux'
import { WHITE } from '../../../helpers/globalStyles'
import actionsAPI from '../../../redux/action/pokemon'
import HeaderNav from '../../fragment/header'
import ListBoxes from '../../fragment/listBoxes'

export default function ListPokemon({navigation}) {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  //const { dispatch } = props

  useEffect(() => {
    console.log('useEffect')
    listPokemonAPI()
    //dispatch(actionsAPI.getListPokemon())
    // dispatch(actionsAPI.getListPokemon())
    // actionsAPI.getListPokemon()
  },[])

  const listPokemonAPI = useCallback(
    () => dispatch({type: 'LIST_POKEMON_REQUEST'}), [dispatch]
  )

  return (
    <View>
      <HeaderNav colorStatus={WHITE} title="List Pokemon" />
      <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
        <ListBoxes textName='List Pokemon' pressAction={() => navigation.navigate('DetailPokemon')} />
      </View>
    </View>
  )
}