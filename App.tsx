import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import NotificationHandle from './screens/NotificationHandle';
import NotificationNavigator from './components/NotificationNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar, AppRegistry} from 'react-native';
import Other from './screens/Other';
import {
  Notifications,
  NotificationAction,
  NotificationCategory,
  NotificationBackgroundFetchResult,
  Notification,
} from  'react-native-notifications';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
     <Tab.Navigator
           screenOptions={({ route }) => ({
             tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Other') {
                  iconName = focused ? 'settings' : 'settings-outline';
              }
               return <Ionicons name={iconName} size={size} color={color} />;
             },
            })} >

            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Other" component={Other} />

     </Tab.Navigator>
  )
}

function App(): JSX.Element {

       Notifications.registerRemoteNotifications();
       console.log("Registered for notifications");

  return (
    <>
      <StatusBar />
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
            <NotificationNavigator/>
          <Stack.Navigator initialRouteName="Home">

            <Stack.Screen
              name="Home"
              component={MainTabNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Other"
              component={MainTabNavigator}
              options={{headerShown: true}}
            />
            <Stack.Screen
                name="NotificationHandle"
                component={NotificationHandle}
                options={{headerShown: true}}
            />
          </Stack.Navigator>
        </NavigationContainer>

      </GestureHandlerRootView>
    </>
  );
}

export default App;
