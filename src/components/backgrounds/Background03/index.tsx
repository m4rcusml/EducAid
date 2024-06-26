import { ViewProps, useWindowDimensions } from "react-native";
import { Container, CoracaoAoMeio } from "./styles";

type Props = ViewProps & { 
  children?: React.JSX.Element | React.JSX.Element[],
}

export function Background03({ children, ...rest }: Props) {
  const { height } = useWindowDimensions();
  
  return (
    <Container {...rest}>
      <CoracaoAoMeio windowHeight={height} />
      {children}
    </Container>
  )
}