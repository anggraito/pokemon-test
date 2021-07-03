import React from 'react'
import { View } from 'react-native'
import { WHITE } from '../../../helpers/globalStyles'
import HeaderNav from '../../fragment/header'
import ListBoxes from '../../fragment/listBoxes'

export default function ListPokemon({navigation}) {
  return (
    <View>
      <HeaderNav colorStatus={WHITE} title="List Pokemon" />
      <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
        <ListBoxes textName='List Pokemon' pressAction={() => navigation.navigate('DetailPokemon')} />
      </View>
    </View>
  )
}