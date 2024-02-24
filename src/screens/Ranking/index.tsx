import { Content, ImageContainer, Images, MemberContainer, MemberPhotoContainer, ProfileCardContainer, RankingItemContainer } from './styles';
import { ScrollView } from 'react-native';

import { Background05 } from '@components/backgrounds/Background05';
import { Header } from '@components/Header';
import { Typography } from '@components/Typography';
import { ProfileCard } from '@components/ProfileCard';
import { useTheme } from 'styled-components/native';

export function Ranking() {
  const { colors } = useTheme();

  return (
    <Background05>
      <ScrollView>
        <Header>
          <Typography color='white' size='xxLarge' weight='semiBold'>Ranking</Typography>
        </Header>
        <ProfileCard style={{ marginVertical: 30 }} borderColor={colors.oliveGreen} size='large' position={1} showExp />

        {
          [{}].map((item, index) => {
            return (
              <RankingItemContainer>
                <Typography 
                  children={index + 1} 
                  size='xxLarge' 
                  color='#6A6A6A' 
                  style={{ flexBasis: 24 }}
                />
                <ProfileCardContainer>
                  <ProfileCard 
                    key={index} 
                    borderColor={colors.oliveGreen} 
                    position={index + 1} 
                    tintColor='white'
                    size='small' 
                    showExp 
                  />
                </ProfileCardContainer>
              </RankingItemContainer>
            )
          })
        }
      </ScrollView>
    </Background05>
  )
}