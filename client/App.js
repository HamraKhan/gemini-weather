import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Dashboard from './src/screens/dashboardPage';
import useFonts from './src/styles/fonts';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';

export default function App() {
  const [IsReady, SetIsReady] = useState(false);
    
  const LoadAssets = async () => {
    await useFonts();
  };
    
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadAssets}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
     );
  }

  return (
    <View style={{
          height: '-webkit-fill-available'
        }}>
      <Dashboard />
      <StatusBar />
    </View>
  );
}