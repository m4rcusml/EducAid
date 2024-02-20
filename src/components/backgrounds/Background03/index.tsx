import { ViewProps } from "react-native";
import { Container, CoracaoAoMeio } from "./styles";

type Props = ViewProps & { 
  children?: React.JSX.Element | React.JSX.Element[],
}

export function Background03({ children, ...rest }: Props) {
  return (
    <Container {...rest}>
      <CoracaoAoMeio />
      {children}
    </Container>
  )
}