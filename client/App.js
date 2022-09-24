import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Dashboard from './src/components/dashboardPage';
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
    <View>
      <Dashboard />
      <StatusBar />
    </View>
  );
}