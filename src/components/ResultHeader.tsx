import styled from 'styled-components';
import { COLORS, FONTS, SIZES } from '../data/cssGlobals';

const Wrapper = styled.section`
  background-image: linear-gradient(
    hsl(${COLORS.gradients.background['slate-blue']}),
    hsl(${COLORS.gradients.background['royal-blue']})
  );

  font-size: ${SIZES.fonts.normal};

  border-radius: 0 0 30px 30px;

  padding: 24px 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${SIZES.screens.mobile}) {
    flex-basis: 50%;
    border-radius: 30px;
    padding: 40px 60px;

    /* gap: 16px; */
    justify-content: space-between;
  }
`;

const ScoreWrapper = styled.section`
  background-image: linear-gradient(
    hsl(${COLORS.gradients.circle['violet-blue']}),
    hsl(${COLORS.gradients.circle['persian-blue']})
  );

  padding: 30px;
  border-radius: 50%;

  aspect-ratio: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${SIZES.screens.mobile}) {
    padding: 55px;
  }
`;

const Score = styled.h2`
  color: hsl(${COLORS.neutral.white});
  font-weight: ${FONTS.weights.extrabold};
  font-size: 3.5rem;

  line-height: 1;

  @media screen and (min-width: ${SIZES.screens.mobile}) {
    font-size: 4rem;
  }
`;

const ScoreDescriptionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

const ScoreWord = styled.h2`
  font-weight: ${FONTS.weights.bold};
  font-size: 1.75rem;
  color: hsl(${COLORS.neutral.white});
`;

const ScoreDescription = styled.p`
  color: hsl(${COLORS.neutral['light-lavender']} / 0.75);
  text-align: center;
`;

const ResultIntro = styled.h2`
  color: hsl(${COLORS.neutral['light-lavender']});
  font-size: 1.25rem;

  @media screen and (min-width: ${SIZES.screens.mobile}) {
    font-size: 1.5rem;
  }
`;

const OutOf = styled.p`
  color: hsl(${COLORS.neutral['light-lavender']} / 0.6);
`;

export default function ResultHeader() {
  return (
    <Wrapper>
      <ResultIntro>Your Result</ResultIntro>
      <ScoreWrapper>
        <Score>76</Score>
        <OutOf>of 100</OutOf>
      </ScoreWrapper>
      <ScoreDescriptionWrapper>
        <ScoreWord>Great</ScoreWord>
        <ScoreDescription>
          You scored higher than 65% of the people who have taken these tests.
        </ScoreDescription>
      </ScoreDescriptionWrapper>
    </Wrapper>
  );
}
