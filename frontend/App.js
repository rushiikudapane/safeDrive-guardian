import React from 'react';
import { StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Screens/Home';
import Map from './src/Screens/Map';
import MyProfile from './src/Screens/MyProfile';
import Notifications from './src/Screens/Notifications';



export default function App() {

  const Stack = createNativeStackNavigator();
  
  return( 
    <NavigationContainer>
      <Stack.Navigator initialRounteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen 
          name="Notifications" 
          component={Notifications}
        />
        <Stack.Screen 
          name="Map" 
          component={Map}
          
          />
        <Stack.Screen 
          name="Myprofile" 
          component={MyProfile}
          />
          
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
