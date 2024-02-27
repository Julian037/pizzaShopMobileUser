import React from 'react';
import { GluestackUIProvider, Text } from "@gluestack-ui/themed"

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { config } from "@gluestack-ui/config"
import {AppNavigator} from './src/config/AppNavigator';
import { AuthProvider } from './src/context';

const App = (): React.JSX.Element => {

  return (
    <GluestackUIProvider config={config}>
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </SafeAreaView>
    </SafeAreaProvider>
    </GluestackUIProvider>
  );
}

export default App;
