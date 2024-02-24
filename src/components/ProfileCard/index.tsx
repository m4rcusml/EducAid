import { TouchableOpacityProps, ViewProps } from 'react-native';
import { Container, ImageContainer, ProfileBorder, UserDetailsContainer } from './styles';

import { useAuth } from '@contexts/authProvider';

import { Typography } from '@components/Typography';
import { Medal, User } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

type Props = TouchableOpacityProps & {
  size?: 'small' | 'meddium' | 'large';
  borderColor?: string;
  tintColor?: 'black' | 'white';
  showExp?: boolean;
  position?: number;
}

export function ProfileCard({ borderColor, size = 'meddium', tintColor = 'black', showExp = false, onPress, position = 0, ...rest }: Props) {
  const { colors } = useTheme();
  const { user } = useAuth();

  let username = user?.userType === 'visitante' ? 'Faça login' : user?.username || user?.email;
  let school = user?.userType === 'visitante' ? '---' : user?.school;
  
  function handleOpenProfile() {
    
  }

  function handlePositionColor() {
    switch(position) {
      case 1:
        return '#FFD646';
      case 2:
        return tintColor === 'black' ? '#555' : '#bbb';
      case 3:
        return '#D9994D';
      default:
        return 'transparent';
    }
  }
  
  return (
    <Container onPress={onPress || handleOpenProfile} {...rest}>
      <ProfileBorder borderColor={borderColor || colors.oliveGreen}>
        <ImageContainer 
          size={size} 
          children={!user?.picture && <User size={size === 'small' ? 24 : size === 'meddium' ? 32 : 40} weight='fill' />}
        />
      </ProfileBorder>

      <UserDetailsContainer>
        <Typography 
          children={username} 
          // color={tintColor}
          weight='semiBold' 
          numberOfLines={1}
          size={size === 'meddium' ? undefined : size === 'large' ? 'large' : 'small'}
        />
        <Typography 
          children={school} 
          color={tintColor === 'black' ? '#777' : '#ccc'}
          numberOfLines={2}
          size={size === 'meddium' || size === 'large' ? 'xSmall' : 'xxSmall'}
        />
        {
        showExp && 
          <Typography size={size === 'meddium' || size === 'large' ? 'small' : 'xSmall'} color={tintColor}>
            {user?.exp || 0} <Typography 
              children={'XP'} 
              color={colors.darkCrimson} 
              size={size === 'meddium' || size === 'large' ? 'small' : 'xSmall'}
            />
          </Typography>
        }
      </UserDetailsContainer>
      
      <Medal color={handlePositionColor()} size={size === 'large' ? 38 : size === 'meddium' ? 28 : 24} />
    </Container>
  )
}