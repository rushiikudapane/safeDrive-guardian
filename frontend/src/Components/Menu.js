
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet} from 'react-native'

// Screens

import Home from '../Screens/Home';
import Notifications from '../Screens/Notifications';
import MyProfile from '../Screens/MyProfile';
import Map from '../Screens/Map';

//Screen names
const HomeName = "Home";
const NotificationsName = "Notifications";
const MapName = "Map";
const MyProfileName = "MyProfile";

const Stack = createBottomTabNavigator();

function Menu() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HomeName) {
              iconName = focused ? 'home-sharp' : 'home';

            } else if (rn === NotificationsName) {
              iconName = focused ? 'notifications-sharp' : 'notifications-outline';

            } else if (rn === MapName) {
              iconName = focused ? 'map-sharp' : 'map-outline';

            } else if (rn === MyProfileName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';

            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 15, height: 70}
        }}>

        <Stack.Screen name={HomeName} component={Home} />
        <Stack.Screen name={NotificationsName} component={Notifications} />
        <Stack.Screen name={MapName} component={Map} />
        <Stack.Screen name={MyProfileName} component={MyProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Menu;




