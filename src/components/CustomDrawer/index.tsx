import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {  } from './styles';
import { useAuth } from '@contexts/authProvider';
import { SignOut } from 'phosphor-react-native';

export function CustomDrawer(props: DrawerContentComponentProps) {
  const { logOut } = useAuth();
  
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
        label='Sair'
        onPress={() => logOut()}
        icon={({ color, size }) => <SignOut color={color} size={size} />}
      />
    </DrawerContentScrollView>
  )
}