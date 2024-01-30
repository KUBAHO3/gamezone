import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import * as Font from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack.js'

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<Boolean>(false)
  
  if(fontsLoaded) {
  return (
      <Navigator />
  );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => {}}
      />
    );
  }
}

