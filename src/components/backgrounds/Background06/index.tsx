import { ViewProps, useWindowDimensions } from "react-native";
import { Container, CirculoRoxo, CoracaoRoxoPequeno } from "./styles";

type Props = ViewProps & { 
  children?: React.JSX.Element | React.JSX.Element[],
}

export function Background06({ children, ...rest }: Props) {
  const { height } = useWindowDimensions();
  
  return (
    <Container {...rest}>
      <CirculoRoxo />
      <CoracaoRoxoPequeno windowHeight={height} fill={'#0000ff'} />
      {children}
    </Container>
  )
}