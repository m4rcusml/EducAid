import { ViewProps } from 'react-native';
import { Container, DetailsContainer, Image, ModuleDescriptionContainer, ProgressBarBackground, ProgressBarForeground, ProgressPlayContainer } from './styles';
import { Typography } from '@components/Typography';
import { useTheme } from 'styled-components/native';
import { Play } from 'phosphor-react-native';

type Props = ViewProps & {
  imageSrc: string;
  title: string;
  module: string;
  description: string;
  progress?: number;
}

export function AulaButton({ style, title, module, description, imageSrc, progress = 0 }: Props) {
  const { colors } = useTheme();
  
  return (
    <Container style={style}>
      <Image source={{ uri: imageSrc}} />
      <DetailsContainer>
        <Typography color='white' weight='bold' size='large'>{title}</Typography>

        <ModuleDescriptionContainer>
          <Typography color={colors.oliveGreen} size='xSmall' weight='bold'>Módulo {module}</Typography>
          <Typography color='white' size='xSmall'>
            {description}
          </Typography>
        </ModuleDescriptionContainer>
        
        <ProgressPlayContainer>
          <ProgressBarBackground children={<ProgressBarForeground value={progress} />} />
          <Typography color='white' size='small'>{progress}%</Typography>
          <Play weight='fill' color='#363636' size={28} />
        </ProgressPlayContainer>
      </DetailsContainer>
    </Container>
  )
}