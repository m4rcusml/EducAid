import { ViewProps } from "react-native";
import { Container, CirculoVermelho, CoracaoRoxo } from "./styles";

type Props = ViewProps & { 
  children?: React.JSX.Element | React.JSX.Element[], 
  distanceFromTop?: 'normal' | 'small';
  dontShowPurpleHeart?: boolean;
}

export function Background02({ children, distanceFromTop = 'normal', dontShowPurpleHeart = false, ...rest }: Props) {
  return (
    <Container {...rest}>
      <CirculoVermelho />
      {!dontShowPurpleHeart && <CoracaoRoxo distanceFromTop={distanceFromTop} />}
      {children}
    </Container>
  )
}