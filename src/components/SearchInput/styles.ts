import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  overflow: hidden;
  
  border: 1px solid #777;
  border-radius: 10px;
  height: 40px;

  flex-direction: row;
  align-items: stretch;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({}))`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  padding: 0 10px;
  flex: 1;
`;

export const Touchable = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-basis: 40px;
`;