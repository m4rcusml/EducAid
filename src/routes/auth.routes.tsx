import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Apresentacao } from '@screens/auth/Apresentacao';
import { Cadastro } from '@screens/auth/Cadastro';
import { Login } from '@screens/auth/Login';
import { RecuperarSenha } from '@screens/auth/RecuperarSenha';

export type AuthRoutesParamList = {
  apresentacao: undefined;
  login: undefined;
  cadastro: undefined;
  recuperar_senha: undefined;
};

const Stack = createNativeStackNavigator<AuthRoutesParamList>();

export default function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName='apresentacao' screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen
        name='apresentacao'
        component={Apresentacao}
      />
      <Stack.Screen
        name='login'
        component={Login}
      />
      <Stack.Screen
        name='cadastro'
        component={Cadastro}
      />
      <Stack.Screen
        name='recuperar_senha'
        component={RecuperarSenha}
      />
    </Stack.Navigator>
  )
}