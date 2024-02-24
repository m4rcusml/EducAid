import { Header } from '@components/Header';
import {  } from './styles';

import { Background05 } from '@components/backgrounds/Background05';
import { Typography } from '@components/Typography';

export function Quizzes() {
  return (
    <Background05>
      <Header>
        <Typography color='white' size='xxLarge' weight='semiBold'>Quizzes</Typography>
      </Header>
    </Background05>
  )
}