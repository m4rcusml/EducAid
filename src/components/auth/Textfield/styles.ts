import styled from 'styled-components/native';

export const Container = styled.View`
  gap: 8px;
`;

export const Input = styled.TextInput.attrs(() => ({
  autoCapitalize: 'none',
  placeholderTextColor: '#979797'
}))<{translucent: boolean}>`
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: 0.5px solid ${({ translucent }) => translucent ? 'transparent' : 'black'};
  background-color: ${({ translucent }) => translucent ? 'transparent' : 'white'};
  border-radius: ${({ translucent }) => translucent ? 0 : 10}px;
  padding: 0 ${({ translucent }) => translucent ? 0 : 10}px;
  height: 45px;
`;

export const BorderBottom = styled.View`
  background-color: black;
  width: 100%;
  height: 1px;
`;