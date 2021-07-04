import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { BG_SET, ITEM_CENTER, SCREEN_HEIGHT, SHADOW_BOTTOM, WHITE } from '../../../helpers/globalStyles'
import { normalize } from '../../../helpers/scallingSize'

export default function DetailItem() {
  return (
    <View style={BG_SET}>
      <View style={{backgroundColor: WHITE, ...SHADOW_BOTTOM, ...ITEM_CENTER, height: SCREEN_HEIGHT/3.5}}>
        <Image source={{uri: 'https://images.unsplash.com/photo-1542779283-429940ce8336?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'}} 
        style={{width: normalize(125), height: normalize(125), borderRadius: normalize(125)/2}}/>
        <TouchableOpacity style={{position: 'absolute', right: 35, top: 20, width: normalize(24), height: normalize(24), alignItems: 'flex-end'}}>
          <Image source={{uri: 'https://www.clipartmax.com/png/middle/108-1087676_close-remove-delete-exit-cross-cancel-trash-comments-close-button-icon-png.png'}} 
          style={{width: normalize(14), height: normalize(14)}} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <Text>text detail item poison</Text>
      </View>
    </View>
  )
}