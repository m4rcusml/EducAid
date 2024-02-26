import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import CirculoRoxoSVG from '@assets/forBackground/circulo-roxo.svg';
import CoracaoRoxoPequenoSVG from '@assets/forBackground/coracao-roxo-pequeno.svg';

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.oldLace};
  flex: 1;
`;

export const CirculoRoxo = styled(CirculoRoxoSVG)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const CoracaoRoxoPequeno = styled(CoracaoRoxoPequenoSVG)<{windowHeight: number}>`
  position: absolute;
  right: 0;
  top: ${({ windowHeight }) => windowHeight * 0.7}px;
`;