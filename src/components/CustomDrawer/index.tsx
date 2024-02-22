import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import { Container, InstagramButton, SocialMediaButton } from './styles';
import { InstagramLogo, Medal, SignOut, User } from 'phosphor-react-native';

import { useAuth } from '@contexts/authProvider';

import LogoEscrita from '@assets/logo-escrita.svg';
import { Typography } from '@components/Typography';
import { ProfileCard } from '@components/ProfileCard';

export function CustomDrawer(props: DrawerContentComponentProps) {
  const { logOut, user } = useAuth();
  
  return (
    <Container>
      <LogoEscrita width='100%' style={{ marginTop: 10, marginBottom: -75 }} />

      <ProfileCard />      

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