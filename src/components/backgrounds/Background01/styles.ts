import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import ElipseSVG from '@assets/forBackground/elipse-roxa.svg';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #1C2663;
`;

export const Elipse = styled(ElipseSVG).attrs(() => ({
  width: '100%'
}))`
  position: absolute;
  top: 0;
  left: 0;
`;