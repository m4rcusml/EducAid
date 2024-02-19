import styled from 'styled-components/native';

export const CarouselItem = styled.View`
  align-items: center;
`;

export const DetailsContainer = styled.View`
  width: 85%;
  align-items: center;
  gap: 25px;
`;

export const Touchable = styled.TouchableOpacity`
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
`;

export const NextButton = styled(Touchable)`
  position: absolute;
  right: 16px;
  bottom: 32px;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  gap: 10px;
`;