import { Content, ImageContainer, Images, MemberContainer, MemberPhotoContainer } from './styles';
import { ScrollView } from 'react-native';

import { Background05 } from '@components/backgrounds/Background05';
import { Header } from '@components/Header';
import { Typography } from '@components/Typography';

export function Ranking() {
  return (
    <Background05>
      <ScrollView>
        <Header>
          <Typography color='white' size='xxLarge' weight='semiBold'>Ranking</Typography>
        </Header>
      </ScrollView>
    </Background05>
  )
}