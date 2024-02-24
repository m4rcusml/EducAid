import styled from 'styled-components/native';

export const Content = styled.View`
  padding: 64px 32px;
`;

export const Images = styled.View`
  margin: 15px 0;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ImageContainer = styled.Image`
  background-color: #D9D9D9;
  border-radius: 10px;
  flex: 1 1 140px;
  min-width: 30%;
  height: 140px;
  overflow: hidden;
`;

export const MemberContainer = styled.View`
  align-items: center;
  gap: 10px;
`;

export const MemberPhotoContainer = styled(ImageContainer)`
  border-radius: 150px;
  width: 100px;
  height: 100px;
`;

export const RankingItemContainer = styled.View`
  padding: 20px 30px;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const ProfileCardContainer = styled.View`
  background-color: #6B84A8;
  flex: 1;
  border-radius: 10px;
`;