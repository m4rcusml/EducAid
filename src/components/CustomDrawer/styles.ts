import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SocialMediaButton = styled.TouchableOpacity`
  padding: 15px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const InstagramButton = styled.View`
  background-color: ${({ theme }) => theme.colors.darkCrimson};
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  height: 34px;
  width: 34px;
`;