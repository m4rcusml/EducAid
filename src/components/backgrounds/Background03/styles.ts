import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import CoracaoAoMeioSVG from '@assets/forBackground/coracao-vermelho-ao-meio.svg';

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.oldLace};
  flex: 1;
`;

export const CoracaoAoMeio = styled(CoracaoAoMeioSVG).attrs(() => ({
  height: '90%',
}))`
  position: absolute;
  top: 6%;
  left: -4%;
`;
