import { ScrollView, useWindowDimensions } from 'react-native';
import { useRef } from 'react';
import { ButtonsContainer, CarouselItem, DetailsContainer, NextButton, Touchable } from './styles';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthRoutesParamList } from '@routes/auth.routes';

import { Background01 } from '@components/backgrounds/Background01';
import { Indicator } from '@components/auth/Indicator';
import { Typography } from '@components/Typography';
import { Button } from '@components/auth/Button';
import { CaretRight } from 'phosphor-react-native';

import EducAid from '@assets/logo.svg';
import Studying from '@assets/studying.svg';
import FirstAidKit from '@assets/first-aid-kit.svg';

export function Apresentacao() {
  const { navigate } = useNavigation<NavigationProp<AuthRoutesParamList>>();
  const { width } = useWindowDimensions();

  const carouselRef = useRef<ScrollView>(null);
  
  function handleGoNext() {
    carouselRef.current?.scrollTo({x: width});
  }
  
  return (
    <Background01 style={{ alignItems: 'center' }}>
      <EducAid width={250} style={{ marginTop: -40, marginBottom: -40 }} />

      <ScrollView
        ref={carouselRef}
        style={{ marginTop: -100 }}
        showsHorizontalScrollIndicator={false} 
        decelerationRate={'fast'}
        // scrollEnabled={false}
        pagingEnabled
        horizontal
      >
        <CarouselItem style={{ width }}>
          <Studying style={{ marginBottom: -30 }} />
          
          <DetailsContainer>
            <Typography weight='bold' color='white' size='xLarge' align='center'>BEM VINDO(A) AO EDUCAID!</Typography>
            <Typography weight='light' color='white' size='large' align='center'>
              Nós somos um aplicativo cujo objetivo é prepará-lo para situações de emergência
            </Typography>

            <Indicator indexToFill={0} />
          </DetailsContainer>
          
          <NextButton onPress={handleGoNext}>
            <Typography color='white' weight='medium' size='large' children='Próximo' />
            <CaretRight color='white' />
          </NextButton>
        </CarouselItem>

        <CarouselItem style={{ width }}>
          <FirstAidKit />
          
          <DetailsContainer>
            <Typography weight='bold' color='white' size='xLarge' align='center'>BEM VINDO(A) AO EDUCAID!</Typography>
            <Typography weight='light' color='white' size='large' align='center'>
              Nossa missão é educar para salvar vidas
            </Typography>

            <Indicator indexToFill={1} />

            <ButtonsContainer>
              <Button text='Entrar' onPress={() => navigate('login')} />
              <Button text='Não possui conta? Cadastrar-se' size='large' backgroundColor='royalBlue' onPress={() => navigate('cadastro')} />
              <Touchable style={{ alignSelf: 'center' }}>
                <Typography color='white' children='Continuar como visitante' />
              </Touchable>
            </ButtonsContainer>
          </DetailsContainer>
        </CarouselItem>
      </ScrollView>
    </Background01>
  )
}