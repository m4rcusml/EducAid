import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.royalBlue};
  border-radius: 15px;
  min-height: 165px;
  max-height: 180px;
  padding: 10px;

  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Image = styled.Image.attrs(() => ({
  resizeMode: 'contain'
}))`
  margin-left: 10px;
  width: 110px;
  height: 145px;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  gap: 12px;
`;

export const ModuleDescriptionContainer = styled.View`
  gap: 2px;
`;

export const ProgressPlayContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const ProgressBarBackground = styled.View`
  background-color: #ddd;
  flex-grow: 1;

  overflow: hidden;
  
  height: 8px;
  border-radius: 10px;
`;

export const ProgressBarForeground = styled.View<{total?: number, value: number}>`
  background-color: ${({ theme }) => theme.colors.oliveGreen};
  width: ${({ total = 100, value }) => value}%;
  height: 100%;
`;