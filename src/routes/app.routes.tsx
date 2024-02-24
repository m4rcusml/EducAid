import { TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'styled-components/native';

import { BellRinging, Gear, House, UserCircle, UserSwitch, UsersThree } from 'phosphor-react-native';
import { CustomDrawer } from '@components/CustomDrawer';

import { Home } from '@screens/Home';
import { QuemSomos } from '@screens/QuemSomos';

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
  const { fontFamily } = useTheme();
  
  return (
    <Drawer.Navigator 
      initialRouteName='home'
      screenOptions={{
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTitle: () => <Logo height={120} width={150} style={{ marginTop: 25 }} />,
        headerRight: () => <TouchableOpacity children={<UserCircle size={30} style={{ marginRight: 10 }} />} />,
        drawerLabelStyle: { marginLeft: -20, fontFamily: fontFamily.medium },
        drawerStyle: { borderTopEndRadius: 20, borderBottomEndRadius: 20 }
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name='home'
        component={HomeRoutes}
        options={{
          title: 'Página inicial',
          drawerIcon: ({ color, size }) => <House color={color} size={size} weight='bold' />
        }}
      />
      <Drawer.Screen
        name='notifications'
        component={Home}
        options={{
          title: 'Notificações',
          drawerIcon: ({ color, size }) => <BellRinging color={color} size={size} weight='bold' />
        }}
      />
      <Drawer.Screen
        name='quemSomos'
        component={QuemSomos}
        options={{
          title: 'Quem somos',
          drawerIcon: ({ color, size }) => <UsersThree color={color} size={size} weight='bold' />
        }}
      />
      <Drawer.Screen
        name='switchAccount'
        component={Home}
        options={{
          title: 'Trocar de conta',
          drawerIcon: ({ color, size }) => <UserSwitch color={color} size={size} weight='bold' />
        }}
      />
      <Drawer.Screen
        name='settings'
        component={Home}
        options={{
          title: 'Configurações',
          drawerIcon: ({ color, size }) => <Gear color={color} size={size} weight='bold' />
        }}
      />
    </Drawer.Navigator>
  )
}