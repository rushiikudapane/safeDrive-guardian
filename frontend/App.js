import React from 'react';
import { StyleSheet, View } from 'react-native';
import Menu from '../frontend/src/Components/Menu';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './src/Screens/Home';
import Notifications from './src/Screens/Notifications';
import Map from './src/Screens/Map';
import MyProfie from './src/Screens/MyProfile'

export default function App() {
  return (



    


    //Map component
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Map/>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>

    //MyProfile component
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

