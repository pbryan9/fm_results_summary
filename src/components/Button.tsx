import React from 'react';
import styled from 'styled-components';
import { COLORS, SIZES } from '../data/cssGlobals';

type ButtonProps = {
  children: React.ReactNode;
};

const Wrapper = styled.button`
  background-color: hsl(${COLORS.neutral['gray-blue']});
  color: hsl(${COLORS.neutral['white']});

  font-size: 1.25rem;

  padding: 18px 0;
  margin-top: 24px;
  border: none;

  border-radius: 9999px;

  &:hover {
    background-image: linear-gradient(
      hsl(${COLORS.gradients.background['slate-blue']}),
      hsl(${COLORS.gradients.background['royal-blue']})
    );
  }

  @media screen and (min-width: ${SIZES.screens.mobile}) {
    padding: 16px 0;
  }
`;

export default function Button({ children }: ButtonProps) {
  return <Wrapper>{children}</Wrapper>;
}
