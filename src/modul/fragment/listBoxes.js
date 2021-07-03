import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ROW_BETWEEN_CENTER, SHADOW_BOTTOM, WHITE } from '../../helpers/globalStyles'
import { normalize } from '../../helpers/scallingSize'
import images from '../../images'

export default function ListBoxes({textName, pressAction}) {
  return (
    <View style={{marginVertical: 5}}>
      <TouchableOpacity onPress={pressAction} 
      style={{...ROW_BETWEEN_CENTER, paddingHorizontal: 20, backgroundColor: WHITE, ...SHADOW_BOTTOM, height: normalize(58), borderRadius: 10}}>
        <Text>{textName}</Text>
        <Image source={images.icon_next} style={{width: normalize(8), height: normalize(12)}} />
      </TouchableOpacity>
    </View>
  )
}