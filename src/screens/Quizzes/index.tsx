import { Header } from '@components/Header';
import {  } from './styles';

import { Background06 } from '@components/backgrounds/Background06';
import { Typography } from '@components/Typography';

export function Quizzes() {
  return (
    <Background06>
      <Header>
        <Typography color='white' size='xxLarge' weight='semiBold'>Quizzes</Typography>
      </Header>
    </Background06>
  )
}