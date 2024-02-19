import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';
import { Typography } from '@components/Typography';

type Props = TouchableOpacityProps & {
  backgroundColor?: 'midnightBlue' | 'royalBlue' | 'limeGreen' | 'oliveGreen';
  color?: 'black' | 'white';
  size?: 'xLarge' | 'large';
  text?: string;
}

export function Button({text, color = 'white', size = 'xLarge', backgroundColor, ...rest}: Props) {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      <Typography color={color} weight='semiBold' size={size} align='center'>
        {text}
      </Typography>
    </Container>
  )
}