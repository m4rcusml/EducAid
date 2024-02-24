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
import { useAuth } from '@contexts/authProvider';
import { useState } from 'react';
import { Alert } from 'react-native';

export function Cadastro() {
  const { goBack, navigate } = useNavigation<NavigationProp<AuthRoutesParamList>>();
  const { bottom } = useSafeAreaInsets();

  const { register } = useAuth();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ school, setSchool ] = useState('');
  
  function handleGoBack() {
    goBack();
  }

  function handleRegister() {
    if(email.trim() && password.trim() && school.trim()) {
      const result = register({ email, password, school });
      Alert.alert(result.type === 'sucess' ? 'Concluido' : 'Ocorreu um erro', result.message, [{
        text: 'Ok',
        onPress: () => result.type === 'sucess' && goBack()
      }] );
    } else {
      Alert.alert('Preencha os campos', 'Todos os campos são obrigatórios');
    }
  }
  
  return (
    <Background02 distanceFromTop='small'>
      <GoBack onPress={handleGoBack}>
        <CaretLeft color='white' />
        <Typography children='Voltar' color='white' weight='medium' size='large' />
      </GoBack>

      <Title text='Criar conta' />

      <Form paddinBottom={bottom}>
        <Textfield label='Email' placeholder='Digite seu email' value={email} onChangeText={setEmail} />
        <Textfield label='Escola' placeholder='Digite o nome da sua escola' value={school} onChangeText={setSchool} />
        <Textfield label='Senha' placeholder='Digite sua senha' value={password} onChangeText={setPassword} />
        
        <Button text='Criar' onPress={handleRegister} />

        <RedirectToCadastro onPress={() => navigate('login')}>
          <Typography color='white'>
            Já possui uma conta? <Span color='white'>Entrar</Span>
          </Typography>
        </RedirectToCadastro>
        
        <OtherAuthentications isRegister />
      </Form>
    </Background02>
  )
}