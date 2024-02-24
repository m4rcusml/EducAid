import { ScrollView } from 'react-native';
import { Content, ImageContainer, Images, MemberContainer, MemberPhotoContainer } from './styles';

import { Background05 } from '@components/backgrounds/Background05';
import { Header } from '@components/Header';
import { Typography } from '@components/Typography';

import LogoEscrita from '@assets/logo-escrita.svg';

export function QuemSomos() {
  return (
    <Background05>
      <ScrollView>
        <Header>
          <Typography color='white' size='xxLarge' weight='semiBold' style={{ marginTop: -10 }}>Quem somos</Typography>
        </Header>

        <Content>
          <Typography color='#4A4A4A' align='justify'>
            O EducAid é um aplicativo desenvolvido com o propósito de auxiliar em situações de emergência do cotidiano, 
            oferecendo simulações em Realidade Aumentada e quizzes interativos para um ensino dinâmico de primeiros socorros.
          </Typography>
          
          <LogoEscrita width='100%' style={{ marginBottom: -50, marginTop: 10, marginLeft: 8 }} />
          
          <Typography color='#4A4A4A' align='justify'>
            Somos um projeto acadêmico de conclusão de curso na Fundação Matias Machline, composto por três integrantes.
          </Typography>

          <Images>
            <ImageContainer />
            <ImageContainer />
          </Images>

          <Images>
            <MemberContainer>
              <Typography children='Alefy Tokuta' weight='bold' size='small' />
              <MemberPhotoContainer />
            </MemberContainer>

            <MemberContainer>
              <Typography children='Ana Gabriela' weight='bold' size='small' />
              <MemberPhotoContainer />
            </MemberContainer>

            <MemberContainer>
              <Typography children='Carlos Jaasiel' weight='bold' size='small' />
              <MemberPhotoContainer />
            </MemberContainer>
          </Images>
        </Content>
      </ScrollView>
    </Background05>
  )
}