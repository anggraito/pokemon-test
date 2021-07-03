/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import SplaschScreen from './modul/splashScreen'

// function HomeScreen({ route, navigation }) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('profile')}>
//         <Text>pindah ke profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
function Profile({ route, navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>Profile</Text>
      <TouchableOpacity onPress={() => navigation.push('auth')}>
        <Text>pindah ke auth</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

const navigationScreen = [
  { name: 'splashscreen', component: SplaschScreen,
    option: { headerTransparent: false },
  },
  { name: 'profile', component: Profile }
  // { name: 'auth', component: Auth},
  // { name: 'camera', component: CameraScreen },
  // { name: 'login', component: Login},
];

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="splashscreen">
      {navigationScreen.map((pages, idx) => {
        console.log( 'item' ,{...pages.option})
        return (
        <Stack.Screen
          key={idx}
          options={{headerShown: false}}
          //options={pages.option}
          {...pages}
        />
      )})}
    </Stack.Navigator>
  );
}

export default AppNavigator;
