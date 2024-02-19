import { TextProps } from 'react-native';
import { StyleProps, Text } from './styles';

type TypographyProps = TextProps & StyleProps & {}

export function Typography({ children, ...rest }: TypographyProps) {
  return (
    <Text {...rest}>
      {children}
    </Text>
  )
}