import { Container, HorizontalSeparator, SeparatorContainer, Touchable } from './styles';
import { Typography } from '@components/Typography';

import GoogleLogo from '@assets/google-logo.svg';

export function OtherAuthentications() {
  return (
    <Container>
      <SeparatorContainer>
        <HorizontalSeparator />
        <Typography children='OU' color='white' />
        <HorizontalSeparator />
      </SeparatorContainer>

      <Touchable>
        <GoogleLogo />
      </Touchable>
    </Container>
  )
}