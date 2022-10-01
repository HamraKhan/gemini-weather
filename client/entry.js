import 'expo/build/Expo.fx';
import { AppRegistry, Platform, View } from 'react-native';
import withExpoRoot from 'expo/build/launch/withExpoRoot';

import App from './App';
import { createRoot } from "react-dom/client";

const rootStyle = { width: '300px'};

AppRegistry.registerComponent('main', () => withExpoRoot(App));
if (Platform.OS === 'web') {
  const rootTag = createRoot(document.getElementById('root') ?? document.getElementById('main'));
  const RootComponent = withExpoRoot(App);
  rootTag.render(<View
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <RootComponent  />
      </View>);
}