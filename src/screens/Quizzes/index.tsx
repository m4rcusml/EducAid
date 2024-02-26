import { Header } from '@components/Header';
import {  } from './styles';

import { Background06 } from '@components/backgrounds/Background06';
import { Typography } from '@components/Typography';
import { SearchInput } from '@components/SearchInput';

export function Quizzes() {
  return (
    <Background06 style={{ paddingHorizontal: 32 }}>
      <Header style={{ marginHorizontal: -32 }}>
        <Typography color='white' size='xxLarge' weight='semiBold'>Quizzes</Typography>
      </Header>
      <SearchInput placeholder='Faça uma pesquisa' />
    </Background06>
  )
}