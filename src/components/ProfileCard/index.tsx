import { Container, ImageContainer, UserDetailsContainer } from './styles';

import { useAuth } from '@contexts/authProvider';

import { Typography } from '@components/Typography';
import { Medal, User } from 'phosphor-react-native';

export function ProfileCard() {
  const { logOut, user } = useAuth();
  let username = user?.userType === 'visitante' ? 'Faça login' : user?.username || user?.email;
  let school = user?.userType === 'visitante' ? '---' : user?.school;
  
  function handleOpenProfile() {
    user?.userType === 'visitante' ? logOut() : () => {}
  }

  return (
    <Container onPress={handleOpenProfile}>
      <ImageContainer children={user?.picture ? user.picture : <User size={32} weight='fill' />} />
      <UserDetailsContainer>
        <Typography 
          children={username} 
          weight='semiBold' 
          numberOfLines={1}
        />
        <Typography 
          children={school} 
          color='#777' 
          size='xSmall' 
          numberOfLines={2}
        />
      </UserDetailsContainer>
      <Medal color='#FFD646' size={28} />
    </Container>
  )
}