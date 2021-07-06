import React, { useCallback, useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { BG_SET, DARKGOLDEN, DARKSLATE, ITEM_CENTER, LIGHTLATE, SCREEN_HEIGHT, SHADOW_BOTTOM, WHITE } from '../../../helpers/globalStyles'
import { normalize } from '../../../helpers/scallingSize'

export default function DetailPokemon({route}) {
  const [detailLoad, setDetailLoad] = useState(true)
  const dispatch = useDispatch()
  const {pokemonName, urlDetail} = route.params
  const {detailData, detailLoading, detailFound} = useSelector(state => state.pokemon)

  console.log('DE', detailData)
  
  useEffect(() => {
    detailPokemonAPI()
  }, [])

  const detailPokemonAPI = useCallback(() => 
    dispatch({type: 'DETAIL_POKEMON_REQUEST', urlDetail}), [dispatch]
    // dispatch(getDetailPokemon(urlDetail))
  ) 

  return (
    <View style={BG_SET}>
      {detailData === null ? <ActivityIndicator size='small' color={DARKGOLDEN} />
      : <><View style={{backgroundColor: WHITE, ...SHADOW_BOTTOM, ...ITEM_CENTER, height: SCREEN_HEIGHT/3}}>
        <Image source={detailData.sprites.back_default === null ? {uri: 'https://images.unsplash.com/photo-1542779283-429940ce8336?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'}
        : {uri: detailData.sprites.back_default}} 
        style={{width: normalize(125), height: normalize(125), borderRadius: normalize(125)/2, borderWidth: 0.5, borderColor: LIGHTLATE}}/>
        <Text style={{fontSize: 24, color: DARKSLATE, paddingTop: 10}}>{pokemonName.toUpperCase()}</Text>
        <TouchableOpacity style={{position: 'absolute', right: 35, top: 20, width: normalize(24), height: normalize(24), alignItems: 'flex-end'}}>
          <Image source={{uri: 'https://www.clipartmax.com/png/middle/108-1087676_close-remove-delete-exit-cross-cancel-trash-comments-close-button-icon-png.png'}} 
          style={{width: normalize(14), height: normalize(14)}} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{width: normalize(100)}}>Weight</Text>
          <Text>: {detailData.weight} Kg</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{width: normalize(100)}}>Height</Text>
          <Text>: {detailData.height} m</Text>
        </View>
      </View>
      </>}
    </View>
  )
}

{/* <DetailList dataDetail={'test'} itemName={pokemonName} /> */}