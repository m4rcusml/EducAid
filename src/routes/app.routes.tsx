import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '@screens/Home';

import Logo from '@assets/logo.svg';
import HomeRoutes from './home.routes';
import { TouchableOpacity } from 'react-native';
import { UserCircle } from 'phosphor-react-native';
import { CustomDrawer } from '@components/CustomDrawer';

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
        headerTitle: () => <Logo height={120} width={150} style={{ marginTop: 25 }} />,
        headerRight: () => <TouchableOpacity children={<UserCircle size={30} style={{ marginRight: 10 }} />} />,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name='profile'
        component={Home}
      />
      <Drawer.Screen
        name='home'
        component={HomeRoutes}
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
    </Drawer.Navigator>
  )
}