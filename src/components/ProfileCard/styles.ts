import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ImageContainer = styled.View`
  background-color: #999;
  border: 1px solid black;
  border-radius: 48px;
  overflow: hidden;

  height: 48px;
  width: 48px;
  padding: 1px;

  justify-content: center;
  align-items: center;
`;

export const UserDetailsContainer = styled.View`
  flex: 1;
  justify-content: center;
`;