import { Form, GoBack, WarningContainer } from './styles';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthRoutesParamList } from '@routes/auth.routes';

import { Background02 } from '@components/backgrounds/Background02';
import { Textfield } from '@components/auth/Textfield';
import { Typography } from '@components/Typography';
import { Button } from '@components/auth/Button';
import { Title } from '@components/auth/Title';
import { CaretLeft, CaretRight, Warning } from 'phosphor-react-native';

import RecoverPassword from '@assets/recover-password.svg';
import { useEffect, useRef, useState } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import { NextButton } from '../Apresentacao/styles';

export function RecuperarSenha() {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const { goBack } = useNavigation<NavigationProp<AuthRoutesParamList>>();
  const { width, height } = useWindowDimensions();
  const carouselRef = useRef<ScrollView>(null);

  function handleGoBack() {
    if(currentIndex !== 0 && currentIndex !== 2) {
      setCurrentIndex(prev => prev - 1);
    } else {
      goBack();
    }
  }
  
  function handleGoNext() {
    setCurrentIndex(prev => prev + 1);
  }

  useEffect(() => {
    if(currentIndex < 3) {
      // console.log(`${width} * ${currentIndex} = ${width * currentIndex}`);

      carouselRef.current?.scrollTo({x: width * currentIndex});
    }  
  }, [currentIndex]);
  
  return (
    <Background02 distanceFromTop='small' dontShowPurpleHeart>
      <GoBack onPress={handleGoBack}>
        <CaretLeft color='white' />
        <Typography children='Voltar' color='white' weight='medium' size='large' />
      </GoBack>

      <Title text='Recuperar senha' />

      <RecoverPassword style={{ marginBottom: -60, marginTop: 50 }} />

      <ScrollView
        ref={carouselRef}
        showsHorizontalScrollIndicator={false}
        decelerationRate={'fast'}
        scrollEnabled={false}
        pagingEnabled
        horizontal
      >
        <Form width={width}>
          <WarningContainer>
            <Warning color='red' size={40} />
            <Typography children='Se você não fornecer seu e-mail, não poderemos recuperar sua senha' weight='light' size='small' />
          </WarningContainer>

          <Textfield label='Email' placeholder='Digite seu email' color='black' />

          <Button text='Enviar' onPress={handleGoNext} />
        </Form>

        <Form width={width} style={{ marginTop: '5%' }}>
          <Textfield label='Código' placeholder='Digite o código enviado no seu email' color='black' translucent />

          <NextButton onPress={handleGoNext} windowHeight={height}>
            <Typography children='Próximo' />
            <CaretRight />
          </NextButton>
        </Form>

        <Form width={width}>
          <Textfield label='Nova senha' placeholder='Digite sua nova senha' color='black' />
          <Textfield label='Confirmar nova senha' placeholder='Digite sua nova senha' color='black' />

          <Button text='Concluir' backgroundColor='oliveGreen' onPress={handleGoBack} />
        </Form>
      </ScrollView>
    </Background02>
  )
}