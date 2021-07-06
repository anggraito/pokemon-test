import React, {useCallback, useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { BG_SET, DARKGOLDEN, GOLD, WHITE } from '../../../helpers/globalStyles'
import ListBoxes from '../../fragment/listBoxes'
import HeaderNav from '../../fragment/header'

export default function ListPokemon({navigation}) {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const {pokemon} = useSelector(state => state)
  // console.log('________________ST_______', pokemon, pokemon.data)

  useEffect(() => {
    listPokemonAPI()
  },[])

  const listPokemonAPI = useCallback(
    () => dispatch({type: 'LIST_POKEMON_REQUEST'}), [dispatch]
  )

  return (
    <SafeAreaView style={BG_SET}>
      <HeaderNav colorStatus={WHITE} title="List Pokemon" />
      <View style={{marginHorizontal: 10, paddingTop: 15, flex: 1}}>
        {pokemon.isLoading ? <ActivityIndicator size='small' color={DARKGOLDEN} />
        : <FlatList data={pokemon.data} 
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <ListBoxes key={index.toString()} id={index} textName={item.name} 
            stylesAdd={[{paddingHorizontal: 10}, pokemon.data.length-1 === index && {paddingBottom: 20}]}
            pressAction={() => navigation.navigate('DetailPokemon', {pokemonName: item.name, urlDetail: item.url})} />
        )} />}
      </View>
    </SafeAreaView>
  )
}