/**
 * React Native App
 * https://github.com/facebook/react-native
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screen
import ReactScreen from './screens/ReactScreens';
import ReactNativeScreen from './screens/ReactNativeScreen';
import NodeScreen from './screens/NodeScreen';

//navigation
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
       <NavigationContainer>
          <Tab.Navigator
            initialRouteName = "React"
            screenOptions = {({route}) => ({
              headerStyle: { backgroundColor: '#34e8eb' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
              tabBarActiveTintColor: '#34e8eb',
              tabBarInactiveTintColor: 'gray',
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = "";
                if (route.name === 'React') {
                  iconName = focused
                    ? 'react'
                    : 'react';
                } else if (route.name === 'ReactNative') {
                  iconName = focused
                    ? 'react'
                    : 'react';
                }else if (route.name === 'Node') {
                  iconName = focused
                    ? 'react'
                    : 'react';
                }
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              }
            })}>
            <Tab.Screen 
              name = "React"
              component = {ReactScreen}
            />
            <Tab.Screen 
              name = "ReactNative"
              component = {ReactNativeScreen}
            />
            <Tab.Screen 
              name = "Node"
              component = {NodeScreen}
            />
          </Tab.Navigator>
       </NavigationContainer>
  );
}

export default App;
