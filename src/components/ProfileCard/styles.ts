import styled from 'styled-components/native';

export const Container = styled.Pressable`
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ProfileBorder = styled.View<{borderColor: string}>`
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 48px;
  padding: 1.5px;
  overflow: hidden;
`;

export const ImageContainer = styled.View<{size: 'small' | 'meddium' | 'large'}>`
  background-color: #999;
  border-radius: 48px;

  height: ${({ size }) => size === 'large' ? 64 : size === 'meddium' ? 48 : 36}px;
  width: ${({ size }) => size === 'large' ? 64 : size === 'meddium' ? 48 : 36}px;

  justify-content: center;
  align-items: center;
`;

export const UserDetailsContainer = styled.View`
  flex: 1;
  justify-content: center;
`;