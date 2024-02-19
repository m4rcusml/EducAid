import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '@screens/Home';

export type AppRoutesParamList = {
  profile: undefined;
  inicio: undefined;
  notifications: undefined;
  quemSomos: undefined;
  settings: undefined;
  switchAccount: undefined;
  sair: undefined;
};

const Drawer = createDrawerNavigator<AppRoutesParamList>();

export default function AppRoutes() {
  return (
    <Drawer.Navigator initialRouteName='inicio'>
      <Drawer.Screen
        name='profile'
        component={Home}
      />
      <Drawer.Screen
        name='inicio'
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