import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{backgroundColor?: 'midnightBlue' | 'royalBlue' | 'limeGreen' | 'oliveGreen'}>`
  background-color: ${({ theme, backgroundColor = 'midnightBlue' }) => theme.colors[backgroundColor]};
  border-radius: 10px;
  /* padding: 15px 0; */

  height: 60px;
  elevation: 4;
  
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;