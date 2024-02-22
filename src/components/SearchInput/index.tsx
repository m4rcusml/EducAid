import { TextInputProps } from 'react-native';
import { Container, Input, Touchable } from './styles';
import { MagnifyingGlass } from 'phosphor-react-native';

export function SearchInput({style, ...props}: TextInputProps) {
  return (
    <Container style={style}>
      <Input {...props} />
      <Touchable children={<MagnifyingGlass />} />
    </Container>
  )
}