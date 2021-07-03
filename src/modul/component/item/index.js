import React from 'react'
import { View } from 'react-native'
import { WHITE } from '../../../helpers/globalStyles'
import HeaderNav from '../../fragment/header'
import ListBoxes from '../../fragment/listBoxes'

export default function ListItem({navigation}) {
  return (
    <View>
      <HeaderNav colorStatus={WHITE} title="List Item" />
      <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
        <ListBoxes textName='Item' pressAction={() => navigation.navigate('DetailPotion')} />
      </View>
    </View>
  )
}