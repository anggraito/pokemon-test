/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react'
 import type {Node} from 'react'
 import { StyleSheet, Text, useColorScheme, View } from 'react-native'
 import { createStackNavigator } from '@react-navigation/stack'
 import { NavigationContainer } from '@react-navigation/native'
 import AppNavigator from './src/navigator'
 import { Provider } from 'react-redux'
//  import store from './src/store'
 
 const App: () => Node = () => {
   return (
     <NavigationContainer>
       {/* <Provider store={store}> */}
         <AppNavigator />
       {/* </Provider> */}
     </NavigationContainer>
   );
 };
 
 export default App;
 