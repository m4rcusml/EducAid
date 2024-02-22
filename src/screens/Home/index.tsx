import { useAuth } from '@contexts/authProvider';

import { Background03 } from '@components/backgrounds/Background03';
import { Typography } from '@components/Typography';
import { Header } from '@components/Header';
import { ScrollView } from 'react-native';
import { AulaButton } from '@components/AulaButton';

export function Home() {
  const { user } = useAuth();
  
  return (
    <Background03>
      <Header>
        <Typography color='white' size='xxLarge' weight='semiBold'>Olá, {user?.username}!</Typography>
        <Typography color='white' weight='light'>Que tal praticar hoje?</Typography>
      </Header>
      <ScrollView style={{ marginTop: 30 }} contentContainerStyle={{ marginHorizontal: 24, gap: 20 }}>
        <AulaButton 
          progress={10}
          title='Engasgo'
          module='Básico'
          description='Módulo focado na conceituação e situações que pode ocorrer.'
          imageSrc='https://s3-alpha-sig.figma.com/img/b0f7/23d3/2cb9fc410a42b5d229f1ecf804c1c17e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adREI8g-CFlmtTUbEtojR9OW6X5~K463dp5nsEKWyJnDftheGdHN1hYkttEhrr3ZY-jZl~3~OCA-IK-LP6dYSFb88xzF6VTYHDGdChmzNBMW08xmyeT-CU9q92Izp-eCWOuvy2tzka06OkVdE9FflZ2X~XcXWVATc0ekGqFIboLXEGEF8OqS4F7vu69p4BxJDBB0nm-1YpV0Bf5p73-xtahIgeLIu9GFfqw0J28xWeN0cuxn~oEYGHxZJwBN5rrKCRD1ctW-bxDNLKXfVPI7zLbbnU-Y62dnqm-YWxDnz6Y~OCr6gwI1VJA~lSeOjliD7JIoxDFy4D1~B-YrUmaMeQ__'
        />
      </ScrollView>
    </Background03>
  )
}