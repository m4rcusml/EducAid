import { Background04 } from '@components/backgrounds/Background04';
import { Typography } from '@components/Typography';
import { Header } from '@components/Header';
import { SearchInput } from '@components/SearchInput';
import { ScrollView } from 'react-native';
import { AulaButton } from '@components/AulaButton';

export function Aulas() {
  return (
    <Background04>
      <Header>
        <Typography color='white' size='xxLarge' weight='semiBold'>Aulas</Typography>
      </Header>

      <SearchInput placeholder='Faça uma pesquisa' style={{ marginHorizontal: 32 }} />
      
      <ScrollView style={{ marginTop: 30 }} contentContainerStyle={{ marginHorizontal: 24, gap: 20, paddingBottom: 30 }}>
        <AulaButton  
          title='Queimadura'
          module='Básico'
          description='Módulo focado na conceituação e situações que pode ocorrer.'
          imageSrc='https://s3-alpha-sig.figma.com/img/12eb/a03f/45fcfe42cc6eda124871d1da46ee1381?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XBsfuFnhrt5SKlT2QDIEMGRoLfSMm6D5YZ4m1LYjr1gfGyTRzdlFxa1VVzYcW25xwqynoxW~lDlu4FPyqQgs8pKDlBvLZX091aSW4-2l08szyNVgwoLwZVrE~IP3sI4StttszLpqxIbVjLAiOi-ftnA7-2thT8pMUKh3kstEJXZvfYc8PCEeVvmXIhI3K0o79NT4ChmyIL97FqJ3Vzvev8ckJTUrv4OX~CODa6C3DUQK-c2-IjLJ5CKuxIMjvZroYHnpWKi75ANzFiWpbD8W8MYwPDZPgN~Ol-t~QqsU7-w~4dwrVICHy18g2spPUmQiFi6HNPkkCjFEhTNhVHxVKg__'
        />
        <AulaButton 
          title='Parada Cardiorrespiratória'
          module='Básico'
          description='Módulo focado na conceituação e situações que pode ocorrer.'
          imageSrc='https://s3-alpha-sig.figma.com/img/4a04/577f/b644889610f69ce9cbf1919d4d2e87f4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMJl7uD9TGPt-kND3-~f71r77Lck9DG8dQUFv9onV9g1mJlaJo7Bxb5xOr9wu5zdheOvPVng3frdecU5z6~XUjDm9GZAbbWiXUvSHZhagHQNNUte~zoWjSqOqp-1Baz4L1elv53xM3FfIfSUSW6MUCbzLWZ3z-Y~hwwtjX-3Qc1tGxqBfveEud9wUJB~Ncg-Ou1RQ9kCXv4TTFElyU0Si5Woy16T0Md8C2BH4q6gMAE6tqZ6njdc-7m7FazGMm4LnRuYexUfDv3Pnqc1DoFKcS8CJuemoV2fTkUP2MTtdz2nHxlFQeW1pjdXpGkyo2NFWK5BH560Wcwjh3vu5yylng__'
        />
        <AulaButton 
          title='Engasgo'
          module='Básico'
          description='Módulo focado na conceituação e situações que pode ocorrer.'
          imageSrc='https://s3-alpha-sig.figma.com/img/b0f7/23d3/2cb9fc410a42b5d229f1ecf804c1c17e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adREI8g-CFlmtTUbEtojR9OW6X5~K463dp5nsEKWyJnDftheGdHN1hYkttEhrr3ZY-jZl~3~OCA-IK-LP6dYSFb88xzF6VTYHDGdChmzNBMW08xmyeT-CU9q92Izp-eCWOuvy2tzka06OkVdE9FflZ2X~XcXWVATc0ekGqFIboLXEGEF8OqS4F7vu69p4BxJDBB0nm-1YpV0Bf5p73-xtahIgeLIu9GFfqw0J28xWeN0cuxn~oEYGHxZJwBN5rrKCRD1ctW-bxDNLKXfVPI7zLbbnU-Y62dnqm-YWxDnz6Y~OCr6gwI1VJA~lSeOjliD7JIoxDFy4D1~B-YrUmaMeQ__'
        />
        <AulaButton 
          title='Parada Cardiorrespiratória'
          module='Básico'
          description='Módulo focado na conceituação e situações que pode ocorrer.'
          imageSrc='https://s3-alpha-sig.figma.com/img/4a04/577f/b644889610f69ce9cbf1919d4d2e87f4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMJl7uD9TGPt-kND3-~f71r77Lck9DG8dQUFv9onV9g1mJlaJo7Bxb5xOr9wu5zdheOvPVng3frdecU5z6~XUjDm9GZAbbWiXUvSHZhagHQNNUte~zoWjSqOqp-1Baz4L1elv53xM3FfIfSUSW6MUCbzLWZ3z-Y~hwwtjX-3Qc1tGxqBfveEud9wUJB~Ncg-Ou1RQ9kCXv4TTFElyU0Si5Woy16T0Md8C2BH4q6gMAE6tqZ6njdc-7m7FazGMm4LnRuYexUfDv3Pnqc1DoFKcS8CJuemoV2fTkUP2MTtdz2nHxlFQeW1pjdXpGkyo2NFWK5BH560Wcwjh3vu5yylng__'
        />
        <AulaButton 
          title='Engasgo'
          module='Básico'
          description='Módulo focado na conceituação e situações que pode ocorrer.'
          imageSrc='https://s3-alpha-sig.figma.com/img/b0f7/23d3/2cb9fc410a42b5d229f1ecf804c1c17e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adREI8g-CFlmtTUbEtojR9OW6X5~K463dp5nsEKWyJnDftheGdHN1hYkttEhrr3ZY-jZl~3~OCA-IK-LP6dYSFb88xzF6VTYHDGdChmzNBMW08xmyeT-CU9q92Izp-eCWOuvy2tzka06OkVdE9FflZ2X~XcXWVATc0ekGqFIboLXEGEF8OqS4F7vu69p4BxJDBB0nm-1YpV0Bf5p73-xtahIgeLIu9GFfqw0J28xWeN0cuxn~oEYGHxZJwBN5rrKCRD1ctW-bxDNLKXfVPI7zLbbnU-Y62dnqm-YWxDnz6Y~OCr6gwI1VJA~lSeOjliD7JIoxDFy4D1~B-YrUmaMeQ__'
        />
      </ScrollView>
    </Background04>
  )
}