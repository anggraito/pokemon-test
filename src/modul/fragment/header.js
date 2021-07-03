import React from 'react'
import { StatusBar, View, Text, Image, TouchableOpacity } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { normalize } from '../../helpers/scallingSize'
import { defaultPadding, ROW_BETWEEN_CENTER, SHADOW_OPC, WHITE } from '../../helpers/globalStyles'

export default function HeaderNav({colorStatus, title}) {

  // function FocusAwareStatusBar() {
  //   const isFocused = useIsFocused();

  //   return isFocused ? <StatusBar {...props} /> : null;
  // }
  const isFocused = useIsFocused()

  return (
    <View>
      {/* <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />  */}
      {isFocused ? <StatusBar barStyle={colorStatus === WHITE ? "dark-content" : "light-content"} backgroundColor={colorStatus} /> : null}
      <View style={{backgroundColor: WHITE, ...SHADOW_OPC, ...ROW_BETWEEN_CENTER, ...defaultPadding}}>
        <Text>{title}</Text>
        {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={images.logo} style={{width: normalize(44), height: normalize(32)}} />
          <View style={{marginLeft: 10}}>
            <Text>MO Checker</Text>
            <Text>Nama Apartment</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => console.log('function logout')}>
          <Image source={images.icon_logout} style={{width: normalize(18), height: normalize(18)}} />
        </TouchableOpacity> */}
      </View>
    </View>
  )
}