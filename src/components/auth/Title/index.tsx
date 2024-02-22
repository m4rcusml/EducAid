import { useWindowDimensions } from 'react-native';
import { Text } from './styles';

export function Title({ text }: { text: string }) {
  const { width } = useWindowDimensions();
  
  return <Text children={text} windowWidth={width} />
}