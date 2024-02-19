import { Container, Index } from './styles';

export function Indicator({ indexToFill }: { indexToFill?: number }) {
  return (
    <Container>
      {/* {new Array(howMany).map((value, index) => <Index key={index} filled={index === indexToFill} />)} */}
      <Index filled={indexToFill === 0} />
      <Index filled={indexToFill === 1} />
    </Container>
  )
}