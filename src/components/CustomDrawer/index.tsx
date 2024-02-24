import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import { Container, InstagramButton, SocialMediaButton } from './styles';
import { InstagramLogo, SignOut } from 'phosphor-react-native';
import { ProfileCard } from '@components/ProfileCard';
import { Typography } from '@components/Typography';

import { useAuth } from '@contexts/authProvider';

import LogoEscrita from '@assets/logo-escrita.svg';

export function CustomDrawer(props: DrawerContentComponentProps) {
  const { logOut, user } = useAuth();
  
  return (
    <Container>
      <LogoEscrita width='100%' style={{ marginTop: 10, marginBottom: -75, marginLeft: 8 }} />

      <ProfileCard size='meddium' onPress={user?.userType === 'visitante' ? logOut :  undefined} />      

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label='Sair'
          onPress={() => logOut()}
          icon={({ color, size }) => <SignOut color={color} size={size} />}
          labelStyle={{ marginLeft: -20 }}
        />
      </DrawerContentScrollView>

      <SocialMediaButton>
        <InstagramButton children={<InstagramLogo color='white' />} />
        <Typography children='@ProjetoEducAid' color='#777' size='small' />
      </SocialMediaButton>
    </Container>
  )
}