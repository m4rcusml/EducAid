import { ForgotPassword, Form, GoBack, RedirectToCadastro, Span } from './styles';

import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Background02 } from '@components/backgrounds/Background02';
import { Typography } from '@components/Typography';
import { CaretLeft, Key } from 'phosphor-react-native';
import { Textfield } from '@components/auth/Textfield';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@components/auth/Button';
import { Title } from '@components/auth/Title';
import { OtherAuthentications } from '@components/auth/OtherAuthentications';
import { AuthRoutesParamList } from '@routes/auth.routes';

export function Cadastro() {
  const { goBack, navigate } = useNavigation<NavigationProp<AuthRoutesParamList>>();
  const { bottom } = useSafeAreaInsets();

  function handleGoBack() {
    goBack();
  }
  
  return (
    <Background02 distanceFromTop='small'>
      <GoBack onPress={handleGoBack}>
        <CaretLeft color='white' />
        <Typography children='Voltar' color='white' weight='medium' size='large' />
      </GoBack>

      <Title text='Criar conta' />

      <Form paddinBottom={bottom}>
        <Textfield label='Email' placeholder='Digite seu email' />
        <Textfield label='Escola' placeholder='Digite o nome da sua escola' />
        <Textfield label='Senha' placeholder='Digite sua senha' />
        
        <Button text='Entrar' />

        <RedirectToCadastro onPress={() => navigate('login')}>
          <Typography color='white'>
          Já possui uma conta? <Span color='white'>Entrar</Span>
          </Typography>
        </RedirectToCadastro>
        
        <OtherAuthentications />
      </Form>
    </Background02>
  )
}