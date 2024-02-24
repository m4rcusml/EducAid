import { ViewProps, useWindowDimensions } from "react-native";
import { Container, CirculoRoxo } from "./styles";

type Props = ViewProps & { 
  children?: React.JSX.Element | React.JSX.Element[],
}

export function Background05({ children, ...rest }: Props) {
  return (
    <Container {...rest}>
      <CirculoRoxo />
      {children}
    </Container>
  )
}