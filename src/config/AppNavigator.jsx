import { View, Text } from 'react-native'
import React, {  FC, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewOrder from '../app/screens/NewOrder/NewOrder';

import { AuthContext } from '../context';
import SignIn from '../app/screens/Signin/SignIn';
import OrdersHistory from '../app/screens/OrdersHistory/OrdersHistory';
import AuthNavigator from './AuthNavigator';
import TabsNavigator from './TabsNavigator';


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
            name="Auth"
            component={AuthNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OrdersHistory"
            component={OrdersHistory}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="NewOrder"
            component={NewOrder}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TabsNavigator"
            component={TabsNavigator}
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}