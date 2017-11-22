import React from 'react';
import { area as d3Area } from 'd3-shape';

export default function Area(props) {
  const area = d3Area()
    .x((d, i) => props.xScale(d.x || i))
    .y0(props.yScale.range()[0])
    .y1(d => props.yScale(d.y));

  return <path d={area(props.data)} fill={props.color} />;
}
