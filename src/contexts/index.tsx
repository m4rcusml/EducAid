import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native'

import theme from '@themes/index';
import { StatusBar } from 'react-native';

export function AppProvider({ children }: { children: React.JSX.Element }) {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent />
      <NavigationContainer>
        {children}
      </NavigationContainer>
    </ThemeProvider>
  )
}