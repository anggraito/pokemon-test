import React from 'react'
import { useEffect } from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import { BG_SET, ITEM_CENTER } from '../helpers/globalStyles'
import { normalize } from '../helpers/scallingSize'
import images from '../images'

export default function SplaschScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home')
    }, 1000)
  })

  return(
    <View style={[BG_SET, ITEM_CENTER]}>
      {/* <StatusBar  /> */}
      <Image source={images.logo} style={{width: normalize(162), height: normalize(57)}}/>
    </View>
  )
}