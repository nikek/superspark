import React from 'react';
import { line as d3Line } from 'd3-shape';

export default function Line(props) {
  const line = d3Line()
    .x((d, i) => props.xScale(d.x || i))
    .y(d => props.yScale(d.y));

  return (
    <path
      d={line(props.data)}
      strokeWidth="1.3"
      stroke={props.color}
      fill="none"
    />
  );
}
