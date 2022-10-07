import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import useFonts from './src/styles/fonts';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import Navbar from './src/components/navbar';

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
      <Navbar />
      <StatusBar />
    </View>
  );
}