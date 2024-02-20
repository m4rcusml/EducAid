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
import { useState } from 'react';
import { useAuth } from '@contexts/authProvider';
import { Alert } from 'react-native';

export function Login() {
  const { goBack, navigate } = useNavigation<NavigationProp<AuthRoutesParamList>>();
  const { bottom } = useSafeAreaInsets();

  const { login } = useAuth();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  function handleLogin() {
    const result = login({ email, password });
    Alert.alert(result.type === 'sucess' ? 'Concluido' : 'Ocorreu um erro', result.message);
  }
  
  return (
    <Background02>
      <GoBack onPress={() => goBack()}>
        <CaretLeft color='white' />
        <Typography children='Voltar' color='white' weight='medium' size='large' />
      </GoBack>

      <Title text='  Log In' />

      <Form paddinBottom={bottom}>
        <Textfield label='Email' placeholder='Digite seu email' value={email} onChangeText={setEmail} />
        <Textfield label='Senha' placeholder='Digite sua senha' value={password} onChangeText={setPassword} secureTextEntry />

        <ForgotPassword onPress={() => navigate('recuperar_senha')}>
          <Key color='white' size={20} />
          <Typography children='Esqueci minha senha' color='white' />
        </ForgotPassword>
        
        <Button text='Entrar' onPress={handleLogin} />

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