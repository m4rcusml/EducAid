import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';

import * as SplashScreen from 'expo-splash-screen';

import { 
  useFonts,
  BeVietnamPro_300Light,
  BeVietnamPro_400Regular,
  BeVietnamPro_500Medium,
  BeVietnamPro_600SemiBold,
  BeVietnamPro_700Bold,
  BeVietnamPro_800ExtraBold
} from '@expo-google-fonts/be-vietnam-pro';

import { AppProvider } from '@contexts/index';
import Routes from '@routes/index';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ fontsLoaded ] = useFonts({
    BeVietnamPro_300Light,
    BeVietnamPro_400Regular,
    BeVietnamPro_500Medium,
    BeVietnamPro_600SemiBold,
    BeVietnamPro_700Bold,
    BeVietnamPro_800ExtraBold
  })
  
  useEffect(() => {
    async function prepare() {
      if(fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]);

  
  if(!fontsLoaded) {
    return null
  }
  
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
