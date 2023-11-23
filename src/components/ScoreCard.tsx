import styled from 'styled-components';
import { COLORS, FONTS, ICONS } from '../data/cssGlobals';

type Title = 'Reaction' | 'Memory' | 'Verbal' | 'Visual';

type ScoreCardProps = {
  title: Title;
  score: number;
};

const Wrapper = styled.article<{ title: Title }>`
  --hsl: ${(props) => COLORS.primary[props.title]};

  background-color: hsl(var(--hsl) / 0.09);

  font-size: 1rem;

  width: 100%;

  display: flex;
  justify-content: space-between;

  border-radius: 12px;

  padding: 16px;
`;

const CaptionWrapper = styled.div<{ title: Title }>`
  --hsl: ${(props) => COLORS.primary[props.title]};
  color: hsl(var(--hsl));

  font-weight: ${FONTS.weights.bold};

  display: flex;
  align-items: center;
  gap: 12px;
`;

const Caption = styled.p``;

const ScoreSegment = styled.div`
  color: hsl(${COLORS.neutral['gray-blue']} / 0.5);
  font-weight: ${FONTS.weights.bold};
`;

const Score = styled.span`
  color: hsl(0 0% 0%);
`;

export default function ScoreCard({ title, score }: ScoreCardProps) {
  return (
    <Wrapper title={title}>
      <CaptionWrapper title={title}>
        <img src={`${ICONS[title]}`} alt='' />
        <Caption>{title}</Caption>
      </CaptionWrapper>
      <ScoreSegment>
        <Score>{score}</Score> / 100
      </ScoreSegment>
    </Wrapper>
  );
}
