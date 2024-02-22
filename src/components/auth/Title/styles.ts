import styled from 'styled-components/native';
import { Typography } from '@components/Typography';

export const Text = styled(Typography).attrs(() => ({
  color: 'white',
  size: 'xxLarge',
  weight: 'semiBold'
}))<{windowWidth: number}>`
  position: absolute;
  width: 160px;
  left: 32px;
  top: ${({ windowWidth }) => windowWidth * 0.23}px;
`;