import 'react-native-gesture-handler';
import React from 'react';
import { GluestackUIProvider, Text } from "@gluestack-ui/themed"

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { config } from "@gluestack-ui/config"
import {AppNavigator} from './src/config/AppNavigator';
import { AuthProvider } from './src/context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = (): React.JSX.Element => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <AuthProvider>
            <AppNavigator />
          </AuthProvider>
        </SafeAreaView>
      </SafeAreaProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}

export default App;
