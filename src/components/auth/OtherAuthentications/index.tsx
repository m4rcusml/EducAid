import { Container, HorizontalSeparator, SeparatorContainer, Touchable } from './styles';
import { Typography } from '@components/Typography';

import GoogleLogo from '@assets/google-logo.svg';
import { useAuth } from '@contexts/authProvider';
import { Alert } from 'react-native';

export function OtherAuthentications({ isRegister = false }: { isRegister?: boolean }) {
  const { loginWithGoogle, registerWithGoogle } = useAuth();
  
  function handleLoginWithGoogle() {
    if(!isRegister) {
      const result = loginWithGoogle();
      Alert.alert(result.type === 'sucess' ? 'Concluido' : 'Ocorreu um erro', result.message);
    } else {
      const result = registerWithGoogle();
      Alert.alert(result.type === 'sucess' ? 'Concluido' : 'Ocorreu um erro', result.message);
    }
  }
  
  return (
    <Container>
      <SeparatorContainer>
        <HorizontalSeparator />
        <Typography children='OU' color='white' />
        <HorizontalSeparator />
      </SeparatorContainer>

      <Touchable onPress={handleLoginWithGoogle}>
        <GoogleLogo />
      </Touchable>
    </Container>
  )
}