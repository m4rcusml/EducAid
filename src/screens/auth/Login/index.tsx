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

export function Login() {
  const { goBack, navigate } = useNavigation<NavigationProp<AuthRoutesParamList>>();
  const { bottom } = useSafeAreaInsets();
  
  return (
    <Background02>
      <GoBack onPress={() => goBack()}>
        <CaretLeft color='white' />
        <Typography children='Voltar' color='white' weight='medium' size='large' />
      </GoBack>

      <Title text='  Log In' />

      <Form paddinBottom={bottom}>
        <Textfield label='Email' placeholder='Digite seu email' />
        <Textfield label='Senha' placeholder='Digite sua senha' />

        <ForgotPassword onPress={() => navigate('recuperar_senha')}>
          <Key color='white' size={20} />
          <Typography children='Esqueci minha senha' color='white' />
        </ForgotPassword>
        
        <Button text='Entrar' />

        <RedirectToCadastro onPress={() => navigate('cadastro')}>
          <Typography color='white'>
            Não possui uma conta? <Span color='white'>Cadastrar-se</Span>
          </Typography>
        </RedirectToCadastro>
        
        <OtherAuthentications />
      </Form>
    </Background02>
  )
}