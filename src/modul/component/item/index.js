import React, { useCallback, useEffect } from 'react'
import { View, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { BG_SET, DARKGOLDEN, WHITE } from '../../../helpers/globalStyles'
import HeaderNav from '../../fragment/header'
import ListBoxes from '../../fragment/listBoxes'

export default function ListItem({navigation}) {
  const {itemMon} = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    getItemAPI()
  }, [])

  const getItemAPI = useCallback(() => {
    dispatch({type: 'LIST_ITEMS_REQUEST'}), [dispatch]
  })

  return (
    <SafeAreaView style={BG_SET}>
      <HeaderNav colorStatus={WHITE} title="List Item" />
      <View style={{marginHorizontal: 10, paddingTop: 15, flex: 1}}>
        {itemMon.isLoading ? <ActivityIndicator size='small' color={DARKGOLDEN} />
        : <FlatList data={itemMon.data} 
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <ListBoxes key={index.toString()} id={index} textName={item.name} 
            stylesAdd={[{paddingHorizontal: 10}, itemMon.data.length-1 === index && {paddingBottom: 20}]}
            pressAction={() => navigation.navigate('DetailPotion', {itemName: item.name})} />
        )} />}
      </View>
    </SafeAreaView>
  )
}