import { ViewProps } from "react-native";
import { Container, Elipse } from "./styles";

export function Background01({ children, ...rest }: ViewProps & { children?: React.JSX.Element | React.JSX.Element[] }) {
  return (
    <Container {...rest}>
      <Elipse />
      {children}
    </Container>
  )
}