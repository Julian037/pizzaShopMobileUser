import { View, Text } from 'react-native'
import React, {  FC, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../app/screens/Home';
import Main from '../app/screens/Main';

import { AuthContext } from '../context';
import SignIn from '../app/screens/Signin/SignIn';


export const AppNavigator = () => {

  const Stack = createNativeStackNavigator();
  const {isLoggedIn, dispatch} = useContext(AuthContext);

  const renderViews = () => {
    if (false) {
      return (
        <Stack.Screen
          name="loading"
          // component={Loading}
          options={{
            headerShown: false,
          }}
        />
      );
    } else if (isLoggedIn) {
      return (
        <>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </>
      );
    }
    return (
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerMode: 'screen',
          // cardStyle: {
          //   backgroundColor: '#F6F6FA',
          //   opacity: 1,
          // },
        }}>
        {renderViews(isLoggedIn)}
        {/* <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>

    </NavigationContainer>
  )
}