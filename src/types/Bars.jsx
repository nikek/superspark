import React from 'react';
import { area as d3Area } from 'd3-shape';

export default function Bars(props) {
  const gapRatio = 0.15;
  const gapCount = props.data.length - 1;
  const gapW = props.xScale.range()[1] / gapCount * gapRatio;
  const barW = (props.xScale.range()[1] - gapW * gapCount) / props.data.length;
  const offset = barW + gapW;

  return (
    <g>
      {props.data.map((d, i) => {
        const barTop = props.yScale(d.y);
        return (
          <rect
            key={i}
            x={i * offset}
            y={barTop}
            height={props.yScale.range()[0] - barTop}
            width={barW}
            fill={props.color}
          />
        );
      })}
    </g>
  );
}
