import { Typography } from '@components/Typography';
import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const GoBack = styled(Touchable)`
  padding: 10px 20px;
`;

export const ForgotPassword = styled(Touchable)`
  gap: 5px;
  justify-content: flex-end;
`;

export const RedirectToCadastro = styled(ForgotPassword)`
  justify-content: center;
`;

export const Span = styled(Typography)`
  text-decoration: underline;
`;

export const Form = styled.View<{paddinBottom: number}>`
  padding: 0 32px ${({ paddinBottom }) => paddinBottom}px 32px;
  position: absolute;
  max-height: 545px;
  height: 65%;
  width: 100%;
  gap: 20px;
  top: 35%;
`;