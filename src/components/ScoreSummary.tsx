import { COLORS, SIZES } from '../data/cssGlobals';
import Button from './Button';
import styled from 'styled-components';
import ScoreCard from './ScoreCard';

const Wrapper = styled.section`
  background-color: hsl(${COLORS.neutral.white});
  display: flex;
  flex-direction: column;
  padding: 32px;

  gap: 18px;

  @media screen and (min-width: ${SIZES.screens.mobile}) {
    flex-basis: 50%;
    padding: 40px;
    border-radius: 30px;
  }
`;

const SummaryTitle = styled.h2`
  font-size: 1.25rem;

  align-self: flex-start;
`;

export default function ScoreSummary() {
  return (
    <Wrapper>
      <SummaryTitle>Summary</SummaryTitle>
      <ScoreCard title='Reaction' score={80} />
      <ScoreCard title='Memory' score={92} />
      <ScoreCard title='Verbal' score={61} />
      <ScoreCard title='Visual' score={72} />
      <Button>Continue</Button>
    </Wrapper>
  );
}
