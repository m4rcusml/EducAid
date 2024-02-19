import { Typography } from '@components/Typography';
import { BorderBottom, Container, Input } from './styles';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  color?: 'black' | 'white';
  translucent?: boolean;
  label: string;
}

export function Textfield({label, color = 'white', translucent = false, ...rest}: Props) {
  return (
    <Container>
      <Typography children={label} weight='bold' size='large' color={color} />
      <Input translucent={translucent} {...rest} />
      {translucent && <BorderBottom />}
    </Container>
  )
}