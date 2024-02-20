import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '@screens/Home';

import Logo from '@assets/logo.svg';
import HomeRoutes from './home.routes';

export type AppRoutesParamList = {
  profile: undefined;
  home: undefined;
  notifications: undefined;
  quemSomos: undefined;
  settings: undefined;
  switchAccount: undefined;
  sair: undefined;
};

const Drawer = createDrawerNavigator<AppRoutesParamList>();

export default function AppRoutes() {
  return (
    <Drawer.Navigator 
      initialRouteName='home'
      screenOptions={{
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTitle: () => <Logo height={120} width={150} style={{ marginTop: 20 }} />
      }}
    >
      <Drawer.Screen
        name='profile'
        component={HomeRoutes}
      />
      <Drawer.Screen
        name='home'
        component={Home}
      />
      <Drawer.Screen
        name='notifications'
        component={Home}
      />
      <Drawer.Screen
        name='quemSomos'
        component={Home}
      />
      <Drawer.Screen
        name='settings'
        component={Home}
      />
      <Drawer.Screen
        name='switchAccount'
        component={Home}
      />
      <Drawer.Screen
        name='sair'
        component={Home}
      />
    </Drawer.Navigator>
  )
}