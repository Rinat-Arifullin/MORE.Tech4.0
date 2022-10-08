import React from 'react';

import Frame, { TFrameTheme } from 'containers/Frame';

interface IRatingCard {
  theme: TFrameTheme;
}

const RatingCard = ({ theme }: IRatingCard) => {
  return <Frame theme={theme}>123</Frame>;
};

export default RatingCard;
