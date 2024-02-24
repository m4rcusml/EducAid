import { ViewProps } from 'react-native';
import { Container } from './styles';

export function Header({ children, ...rest }: ViewProps & { children: React.ReactNode }) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}