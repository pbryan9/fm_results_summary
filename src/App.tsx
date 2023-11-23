import styled from 'styled-components';

import { COLORS, FONTS, SIZES } from './data/cssGlobals';
import ResultHeader from './components/ResultHeader';
import ScoreSummary from './components/ScoreSummary';

function App() {
  return (
    <Main>
      <ResultHeader />
      <ScoreSummary />
    </Main>
  );
}

export default App;

const Main = styled.main`
  font-family: ${FONTS.hanken};
  font-weight: ${FONTS.weights.medium};
  font-size: ${SIZES.fonts.normal};

  background-color: hsl(${COLORS.neutral.white});

  @media screen and (min-width: ${SIZES.screens.mobile}) {
    position: absolute;
    top: 50%;
    left: 50%;

    border-radius: 30px;

    transform: translate(-50%, -50%);

    max-width: 736px;

    display: flex;
    justify-content: center;

    box-shadow: 4px 4px 40px hsl(${COLORS.neutral['light-lavender']} / 0.5);
  }
`;
