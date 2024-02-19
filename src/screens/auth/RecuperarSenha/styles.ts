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

export const WarningContainer = styled.View`
  border: 1px solid red;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const Form = styled.View<{width: number}>`
  width: ${({ width }) => width}px;
  gap: 25px;
  padding: 32px;
`;