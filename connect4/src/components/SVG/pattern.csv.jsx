import React from 'react';

/**
 * SVG pattern for masking circles.
 *
 * @returns
 */
const BoardPattern = () => {
  return (
    <defs>
      <pattern
        id='cell-pattern'
        patternUnits='userSpaceOnUse'
        width='100'
        height='100'
      >
        <circle cx='50' cy='50' r='35' fill='black' />
      </pattern>
      <mask id='cell-mask'>
        <rect width='700' height='600' fill='white' rx='20' ry='20' />
        <rect width='700' height='600' fill='url(#cell-pattern)' />
      </mask>
    </defs>
  );
};

export default BoardPattern;
