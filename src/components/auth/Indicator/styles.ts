import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const Index = styled.View<{filled?: boolean}>`
  background-color: ${({ theme, filled }) => filled ? theme.colors.darkCrimson : 'transparent'};
  border: 1.5px solid ${({ theme, filled }) => filled ? theme.colors.darkCrimson : '#808080'};
  border-radius: 16px;
  width: 16px;
  height: 16px;
`;