import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  gap: 15px;
`;

export const SeparatorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const HorizontalSeparator = styled.View`
  background-color: white;
  height: 1px;
  flex: 1;
`;

export const Touchable = styled.TouchableOpacity`
  border: 2px solid #1C2663;
  padding: 6px;
  border-radius: 60px;
`;