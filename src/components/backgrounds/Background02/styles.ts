import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import CirculoVermelhoSVG from '@assets/forBackground/circulo-vermelho.svg';
import CoracaoRoxoSVG from '@assets/forBackground/coracao-roxo.svg';

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.oldLace};
  flex: 1;
`;

export const CirculoVermelho = styled(CirculoVermelhoSVG)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const CoracaoRoxo = styled(CoracaoRoxoSVG).attrs<{distanceFromTop: 'normal' | 'small'}>(({distanceFromTop}) => ({
  scaleY: distanceFromTop === 'normal' ? 1 : 1.2,
  width: '100%',
}))`
  position: absolute;
  top: 30%;
  left: 0;
`;