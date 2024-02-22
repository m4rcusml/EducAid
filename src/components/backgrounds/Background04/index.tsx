import { ViewProps, useWindowDimensions } from "react-native";
import { Container, CirculoRoxo, CoracaoVermelhoPequeno } from "./styles";

type Props = ViewProps & { 
  children?: React.JSX.Element | React.JSX.Element[],
}

export function Background04({ children, ...rest }: Props) {
  const { height } = useWindowDimensions();
  
  return (
    <Container {...rest}>
      <CirculoRoxo />
      <CoracaoVermelhoPequeno windowHeight={height} />
      {children}
    </Container>
  )
}