import { Container } from './styles';

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      {children}
    </Container>
  )
}